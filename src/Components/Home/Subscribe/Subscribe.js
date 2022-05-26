import React from 'react';
import { BsMailbox } from 'react-icons/bs'

const Subscribe = () => {
    return (
        <div className="px-20 xs:px-5 py-20 bg-gray-300 flex items-center justify-center sm:flex-col xs:flex-col gap-12 sm:gap-6 xs:gap-5 my-10">
            <div className="flex items-center xs:flex-col gap-5 xs:gap-0 xs:text-center">
                <BsMailbox className="text-[90px] text-gray-500" />
                <div className="text-gray-700">
                    <h1 className="text-2xl font-semibold ">Get Updates & More</h1>
                </div>
            </div>
            <div className="flex items-center xs:flex-col w-6/12 sm:w-full xs:w-full relative">
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-16 xs:h-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="example@email.com" />
                <button className=" absolute xs:static right-0 h-16 xs:h-10 px-8 bg-blue-600 rounded-r xs:rounded xs:mt-2 text-white">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;