import React from 'react';
import aboutImg from '../../../images/aboutsidebar.png'

const AboutUs = () => {
    return (
        <div>
            <div className='px-[80px] xs:px-6 max-w-[1920px] mx-auto py-5'>
                <div className='flex justify-between items-center gap-4 pb-8'>
                    <div className='border border-gray-300 flex-1'></div>
                    <div>
                        <h1 className='text-4xl font-bold text-center flex items-center'>About Us</h1>
                    </div>
                    <div className='border border-gray-300 flex-1'></div>
                </div>
                <div className='flex justify-between items-center xs:flex-col gap-10'>
                    <div className='flex-1'>
                        <h1 className='text-2xl font-semibold pb-3'>Company Overview</h1>
                        <p>Since 1972, Portion Tags Co. has evolved in support of our customers. Founded with six employees in a 6,000-square foot warehouse, Copper State now supports more than 20,000 customers with more than 30 company facilities. With almost 500 employees, we pride ourselves on outstanding customer service, value-added solutions, continuous improvement, and continued reinvestment in the growth of our business. In every one of our locations Copper State is proud to support the very smallest of customers, the very largest of customers, and everyone in between.</p>
                    </div>
                    <div className='flex-1'>
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;