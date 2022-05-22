import React from 'react';
import Product from './Product/Product';

const Products = () => {
    return (
        <div className='py-12'>
            <div className='px-[80px] max-w-[1920px] mx-auto'>
                <div className='flex justify-between items-center gap-4 pb-5'>
                    <div className='border border-gray-300 flex-1'></div>
                    <h1 className='text-4xl font-bold text-center flex items-center'>Products</h1>
                    <div className='border border-gray-300 flex-1'></div>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default Products;