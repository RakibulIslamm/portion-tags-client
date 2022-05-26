import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// Checkout form 
const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { price, quantity, name, email, _id } = order;
    const amount = parseFloat((price * quantity).toFixed(2));


    useEffect(() => {
        fetch('https://portion-tags.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
            .catch(err => {
                console.log(err);
            });

    }, [amount]);

    // console.log(clientSecret);


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        try {
            setProcessing(true);

            if (!stripe || !elements || !clientSecret) {
                // Stripe.js has not loaded yet. Make sure to disable
                // form submission until Stripe.js has loaded.
                return;
            }

            // Get a reference to a mounted CardElement. Elements knows how
            // to find your CardElement because there can only ever be one of
            // each type of element.
            const card = elements.getElement(CardElement);

            if (card == null) {
                return;
            }

            // Use your card Element with other Stripe.js APIs
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card,
            });

            if (error) {
                setCardError(error.message);
                console.log(error.message);
            } else {
                // console.log('[PaymentMethod]', paymentMethod);
                setCardError('')
            }
            // Confirm Card payment
            const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: name,
                            email: email,
                        },
                    },
                },
            );

            if (intentError) {
                setCardError(intentError?.message);
                setProcessing(false);
            }
            else {
                setCardError('');
                setTransactionId(paymentIntent.id);
                toast.success('Payment Successful');

                fetch(`https://portion-tags.herokuapp.com/order/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        transactionId: paymentIntent.id,
                        email: email,
                        orderId: _id
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(err => console.log(err));

                setProcessing(false);
            }
        }
        finally {
            setProcessing(false);
        }

    };

    // console.log(transactionId);

    return (
        <>
            {cardError && <p className='pb-5 text-red-600 text-sm'>{cardError}</p>}
            <form className='w-full' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='px-5 py-1 bg-yellow-600 text-white rounded-full mt-4 disabled:cursor-not-allowed' type="submit" disabled={!stripe || !clientSecret}>
                    {processing ? 'Processing...' : 'Pay'}
                </button>
            </form>
        </>
    )
}

export default CheckoutForm;