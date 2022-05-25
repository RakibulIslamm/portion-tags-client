import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://portion-tags.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.reverse()))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [])

    console.log(products);

    return (
        <div className='py-12'>
            <div className='px-[80px] max-w-[1920px] mx-auto'>
                <div className='flex justify-between items-center gap-4 pb-5'>
                    <div className='border border-gray-300 flex-1'></div>
                    <h1 className='text-4xl font-bold text-center flex items-center'>Products</h1>
                    <div className='border border-gray-300 flex-1'></div>
                </div>
                {
                    loading ? <Spinner /> :
                        <div className='grid grid-cols-3 gap-6'>
                            {products.slice(0, 6).map(product => <Product key={product._id} product={product} />)}
                        </div>
                }
            </div>
        </div>
    );
};

export default Products;