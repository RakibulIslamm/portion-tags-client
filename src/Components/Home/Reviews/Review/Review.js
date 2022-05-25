import React from 'react';

const Review = () => {
    return (
        <div>
            <div className="p-4 text-gray-800 rounded-lg shadow-md border">
                <div className="mb-2">
                    <p className="mb-2 text-center text-gray-600 ">
                        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                    </p>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                            <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img"
                                className="object-cover object-center w-full h-full" />
                        </div>
                        <h5 className="font-bold text-indigo-600">John Doe</h5>
                        <p className="text-sm text-gray-600">CEO / Founder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;