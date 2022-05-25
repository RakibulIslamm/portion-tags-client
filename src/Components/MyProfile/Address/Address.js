import React from 'react';

const Address = () => {
    return (
        <div>
            <h1 className='text-left text-2xl font-bold mb-4'>Address</h1>
            <div>
                <h1 className='text-left text-xl font-bold mb-4'>Present Address</h1>
                <p className='text-left text-base font-semibold'>Address Line Here</p>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <h1 className='text-left text-xl font-bold mb-4'>Permanent Address</h1>
                <p className='text-left text-base font-semibold'>Address Line Here</p>
            </div>
        </div>
    );
};

export default Address;