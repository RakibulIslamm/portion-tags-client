import React from 'react';
import counterBg from '../../../images/texture-background_1056869.jpg'
import { BsPeopleFill, BsGearFill, BsHouseFill } from 'react-icons/bs'

const BusinessSummary = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat xs:py-10 h-96 xs:h-full flex items-center w-full' style={{
            backgroundImage: `url(${counterBg})`,
        }}>
            <div className='px-[80px] xs:px-6 w-full max-w-[1920px] mx-auto text-white flex justify-between items-start gap-16 xs:flex-col'>
                <div>
                    <h1 className='text-3xl xs:text-center'>We Have Great Achievement <br /> To Show</h1>
                </div>
                <div className='flex-1'>
                    <div className='flex items-center justify-between xs:flex-col xs:items-center xs:gap-10'>
                        <div className='text-left xs:text-center'>
                            <div className='flex xs:justify-center'><BsPeopleFill className='text-[70px]' /></div>
                            <div className='border-2 border-gray-100 w-20 mb-2 xs:w-full'></div>
                            <h1 className='text-[40px] font-semibold tracking-wider'>1425</h1>
                            <p className='text-[17px] font-light track'>Clients Served</p>
                        </div>
                        <div className='text-left xs:text-center'>
                            <div className='flex xs:justify-center'><BsGearFill className='text-[65px] mb-[5px]' /></div>
                            <div className='border-2 border-gray-100 w-20 mb-2 xs:w-full'></div>
                            <h1 className='text-[40px] font-semibold tracking-wider'>3747</h1>
                            <p className='text-[17px] font-light track'>Parts Manufactured</p>
                        </div>
                        <div className='text-left xs:text-center'>
                            <div className='flex xs:justify-center'><BsHouseFill className='text-[65px] mb-[5px]' /></div>
                            <div className='border-2 border-gray-100 w-20 mb-2 xs:w-full'></div>
                            <h1 className='text-[40px] font-semibold tracking-wider'>67</h1>
                            <p className='text-[17px] font-light track'>MARKETS</p>
                        </div>
                    </div>
                    <div className='mt-10 space-x-6 text-right xs:text-center xs:space-y-3'>
                        <span className='text-sm font-extralight'>Need any floor & Private Solution? <span className='text-xl font-semibold ml-2'>Call US Now</span></span>
                        <button className='px-10 py-2 rounded-full border border-gray-100'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;