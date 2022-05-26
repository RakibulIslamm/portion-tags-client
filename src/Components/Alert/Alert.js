import React from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Alert = ({ onClose, handleAlert, action }) => {
    return (
        <div className='bg-gray-900 w-[400px] xs:w-11/12 xs:mx-auto p-10 text-white'>
            <h1 className='text-2xl font-semibold'>Are you sure?</h1>
            <p className='text-lg'>You want to <b className='text-xl'>{action}</b> ?</p>
            <div className='flex items-center gap-2 pt-4'>
                <button className='px-6 py-1 border-2 hover:bg-white hover:text-black transition-all duration-200 ease-in-out border-white' onClick={() => handleAlert(onClose, true)}>Yes</button>
                <button className='px-6 py-1 border-2 hover:bg-white hover:text-black transition-all duration-200 ease-in-out border-white' onClick={() => handleAlert(onClose, false)}>No</button>
            </div>
        </div>
    );
};

export default Alert;