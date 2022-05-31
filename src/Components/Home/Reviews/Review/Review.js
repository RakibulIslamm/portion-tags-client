import React from 'react';
import StarPicker from 'react-star-picker';
import userImg from '../../../../images/user.png'
import { BsChatQuote } from 'react-icons/bs'

const Review = ({ review }) => {

    const { name, reviewText, rating, img } = review;

    return (
        <div className='bg-gray-100 p-10 border text-center relative m-3'>
            <div className='flex justify-center mb-4'>
                <BsChatQuote className='text-[60px] text-gray-400' />
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p className='text-sm'>{reviewText?.split(' ').slice(0, 20).join(' ')}...</p>
                <div className='flex justify-center'>
                    <StarPicker size={30} value={rating} initialValue disabled halfStars name="rating" />
                </div>
                <div className='flex justify-center items-center flex-col relative'>
                    <img className="object-cover object-center w-12 h-12 rounded-full" src={userImg || img} alt="" />
                    <h4 className='text-lg font-semibold'>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Review;