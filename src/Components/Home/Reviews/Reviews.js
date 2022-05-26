import React from 'react';
import Review from './Review/Review';

const Reviews = () => {
    return (
        <div className='py-10'>
            <div className='px-[80px] xs:px-6 max-w-[1920px]'>
                <div className='flex justify-between items-center gap-4 pb-6'>
                    <div className='border border-gray-300 flex-1'></div>
                    <div>
                        <h1 className='text-4xl font-bold text-center flex items-center'>Testimonials</h1>
                        <p className="text-lg text-gray-600">What others say about us</p>
                    </div>
                    <div className='border border-gray-300 flex-1'></div>
                </div>
                <div className='mx-auto grid grid-cols-3 xs:grid-cols-1 gap-4'>
                    <Review />
                </div>
            </div>
        </div>
    );
};

export default Reviews;