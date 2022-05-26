import React from 'react';
import StarPicker from 'react-star-picker';
import userImg from '../../../../images/user.png'

const Review = ({ review }) => {

    const { name, reviewText, rating, img } = review;

    return (
        <div>
            <div className="px-4 py-6 text-gray-800 rounded-lg shadow-md border">
                <div className="mb-2">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                            <img src={img || userImg} alt="img"
                                className="object-cover object-center w-full h-full" />
                        </div>
                        <h5 className="font-bold text-indigo-600">{name}</h5>
                    </div>
                    <div className='flex justify-center'>
                        <StarPicker size={30} value={rating} initialValue disabled halfStars name="rating" />
                    </div>
                    <p className="mb-2 text-center text-gray-600 ">
                        " {reviewText?.split(' ').slice(0, 25).join(' ')} "
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Review;