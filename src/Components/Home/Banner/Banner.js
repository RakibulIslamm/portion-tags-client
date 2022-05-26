import React from 'react';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div className='relative h-[100vh] -mt-[60px] bg-gradient-to-b from-[#010013e7] via-[#000000c5] to-[#000000a8]'>
            <img className='w-full h-full bg-cover bg-center absolute mix-blend-overlay z-0' src={banner} alt="" />
            <div className='px-[80px] max-w-[1920px] h-full mx-auto flex justify-center items-center relative z-10 text-white text-center py-52'>
                <div>
                    <h1 className='text-2xl xs:text-sm font-semibold'>DEDICATED TO THE</h1>
                    <h1 className='text-[60px] xs:text-2xl font-bold'>PROFESSIONAL</h1>
                    <p className='font-light xs:text-xs'>Premier Automotive Parts Supplier Serving Customers for 50 Years</p>
                    <button className='px-10 py-2 bg-yellow-600 text-white my-3'>Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;