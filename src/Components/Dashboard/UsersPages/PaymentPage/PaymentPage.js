import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3apqGfM7t0biYB4EJ3FhP6vBMdlLOjeX6nVSf93agEihMX68uWaMa2YXSnlzsBFyQONnsHSEMY4FvjyQwwrstB00LkmE2hop');

const PaymentPage = () => {
    const [order, setOrder] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://portion-tags.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id]);
    // console.log(order);
    const { ProductName, price, quantity } = order;
    const totalPrice = (price * quantity).toFixed(2);
    return (
        <div className=''>
            <div className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] mx-auto'>
                <div className='flex justify-center items-center min-h-screen'>
                    <div className='w-full'>
                        <div>
                            <h2 className='text-2xl xs:text-lg xs:w-full font-semibold'>Pay for: {ProductName}</h2>
                            <h2 className='text-lg xs:text-lg xs:w-full font-semibold'>Total Price: ${totalPrice}</h2>
                        </div>
                        <div className='w-full mt-10 shadow-lg border p-5 rounded'>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={order} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;