import React from 'react';
import Review from './Review/Review';

const Reviews = () => {
    return (
        <div className='py-10'>
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-indigo-600">Testimonials</h2>
                <p className="text-lg text-gray-600">What others say about us</p>
            </div>
            <div className='px-[80px] max-w-[1920px] mx-auto grid grid-cols-3 gap-4'>
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
            </div>
        </div>
    );
};

export default Reviews;