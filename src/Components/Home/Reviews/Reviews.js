import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://portion-tags.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.reverse()))
    }, [])

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
                    {reviews.slice(0, 3).map(review => <Review key={review._id} review={review} />)}
                </div>
            </div>
        </div>
    );
};

export default Reviews;