import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const PurchaseForm = ({ user, product }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { ProductName, minOrder, quantity, _id, img, price } = product;

    const [quantityInput, setQuantityInput] = useState(minOrder);
    // console.log(quantityInput);


    const onSubmit = data => {
        const orderData = { ...data, status: false, paid: false, ProductName, img, name: user.displayName, email: user.email, productId: _id, price };
        console.log(orderData);
        fetch('https://portion-tags.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Order Placed Successfully');
                    reset();
                }
            })
    };

    return (
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input className='px-5 py-2 border w-full bg-gray-200 rounded' type="text" name='name' value={user.displayName} readOnly disabled />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input className='px-5 py-2 border w-full bg-gray-200 rounded' type="text" name='email' value={user.email} readOnly disabled />
            </div>
            <div className='flex gap-3 xs:flex-col'>
                <div className='w-2/3 xs:w-full'>
                    <label htmlFor="address">Address</label>
                    <input {...register("address", { required: true })} className='px-5 py-2 border w-full bg-gray-200 focus:bg-white rounded' name='address' type="text" placeholder="Address" />
                    <p className='text-red-400 text-xs italic'>{errors.address?.type === 'required' && "Address is required"}</p>

                </div>
                <div className='w-1/3 xs:w-full'>
                    <label htmlFor="zip">Zip Code</label>
                    <input {...register("zip", { required: true })} className='px-5 py-2 border w-full bg-gray-200 focus:bg-white rounded' name='zip' type="text" placeholder='zip code' />
                    <p className='text-red-400 text-xs italic'>{errors.zip?.type === 'required' && "Zip code is required"}</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <div className='w-1/3'>
                    <label htmlFor="name">Quantity</label>
                    <input {...register("quantity", { required: true })} className='px-5 py-2 border w-full bg-gray-200 focus:bg-white rounded' name='quantity' type="number" onChange={(e) => setQuantityInput(e.target.value)} placeholder={minOrder} />
                    <p className='text-red-500 text-xs italic'>{errors.quantity?.type === 'required' && "Quantity is required"}</p>
                    <p className='text-red-500 text-xs italic'>{quantityInput < minOrder ? `Minimum Order limit ${minOrder}` : ''}</p>
                    <p className='text-red-500 text-xs italic'>{quantityInput > quantity ? "You can't order more than available items" : ''}</p>
                </div>
                <div className='w-2/3'>
                    <label htmlFor="name">Phone Number</label>
                    <input {...register("phone", { required: true })} className='px-5 py-2 border w-full bg-gray-200 focus:bg-white rounded' type="text" name='phone' placeholder="Phone Number" />
                    <p className='text-red-400 text-xs italic'>{errors.phone?.type === 'required' && "Phone number is required"}</p>
                </div>
            </div>
            <div>
                <label htmlFor="message">Short Note</label>
                <textarea {...register("message", { required: false })} className='px-5 py-2 border w-full bg-gray-200 focus:bg-white rounded' name='message' placeholder="Message" />
            </div>
            {
                quantityInput < minOrder || quantityInput > quantity ? <button className='block px-6 py-2 bg-yellow-600 text-white disabled:bg-slate-400 cursor-not-allowed' type='submit' disabled>Palce Order</button> :
                    <button className='block px-6 py-2 bg-yellow-600 text-white' type='submit'>Palce Order</button>
            }
        </form>
    );
};

export default PurchaseForm;