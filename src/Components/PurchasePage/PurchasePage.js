import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarPicker from 'react-star-picker';
import useAuth from '../../hooks/useAuth';
import PurchaseForm from './PurchaseForm/PurchaseForm';
import { BsChevronDown } from 'react-icons/bs';

const PurchasePage = () => {
    const [product, setProduct] = useState({});
    const [openUser, setOpenUser] = useState(false);
    const { user } = useAuth();

    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        fetch(`https://portion-tags.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err.message));
    }, [id]);

    // console.log(product);
    const { ProductName, price, desc, img, rating, quantity, minOrder } = product;

    return (
        <div className='py-16'>
            <div className='px-[80px] max-w-[1920px] mx-auto min-h-screen'>
                <button onClick={() => setOpenUser(!openUser)} className='px-6 my-2 text-white bg-yellow-600 flex items-center gap-1'>User <BsChevronDown /></button>
                {openUser && <div className='pb-4'>
                    <h2>{user.displayName}</h2>
                    <p>{user.email}</p>
                </div>}
                <div className='flex items-start gap-4'>
                    <div className='flex-1'>
                        <img className='border p-10' src={img} alt="" />
                        <div>
                            <h1 className='text-2xl font-semibold py-2'>{ProductName}</h1>
                            <h2 className='text-lg font-semibold'>Price: ${price} per item</h2>
                            <p className='text-lg'>{desc}</p>
                            <span className='flex items-center gap-1 text-lg'><StarPicker value={rating} /> {rating} Star</span>
                            <div className='mt-4'>
                                <span className='text-base mt-2'>Available Quantity: {quantity}</span><br />
                                <span className='text-base mt-2'>Minimum Order Limit: {minOrder}</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-3xl font-semibold pb-3'>Place an Order</h1>
                        <PurchaseForm user={user} product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;