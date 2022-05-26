import React from 'react';
import locationImg from '../../../images/location_img.png'
import locationBg from '../../../images/location_bg.jpg'

const Location = () => {
    return (
        <div style={{
            backgroundImage: `url(${locationBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} className='mt-10'>
            <div className='px-[80px] xs:px-6 max-w-[1920px] mx-auto py-5'>
                <div className='flex justify-between items-center gap-10'>
                    <div className='flex-1 text-white space-y-5'>
                        <h1 className='text-4xl font-semibold pb-3'>NETWORK OF LOCATIONS</h1>
                        <p className='text-[20px] font-thin'>With multiple distribution hubs and a powerful network of locations throughout the Southeast, we are ready to serve the needs of your business.</p>
                        <button className='px-10 py-3 bg-yellow-600 text-white rounded-full text-lg'>See Our Location</button>
                    </div>
                    <div className='flex-1 xs:hidden'>
                        <img src={locationImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;