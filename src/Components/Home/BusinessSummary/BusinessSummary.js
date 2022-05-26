import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='bg-gray-800'>
            <div className='px-[80px] xs:px-6 max-w-[1920px] mx-auto py-20 mb-10 text-white'>
                <div className='flex items-center justify-between xs:flex-col xs:gap-10'>
                    <div className='text-center'>
                        <h1 className='text-[40px] font-bold'>1425</h1>
                        <p className='text-[18px] font-light'>Clients Served</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-[40px] font-bold'>3747</h1>
                        <p className='text-[18px] font-light'>Parts Manufactured</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-[40px] font-bold'>6747</h1>
                        <p className='text-[18px] font-light'>Parts Repaired</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-[40px] font-bold'>67</h1>
                        <p className='text-[18px] font-light'>MARKETS</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-[40px] font-bold'>471</h1>
                        <p className='text-[18px] font-light'>Other Things</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;