import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../Dashboard/SideBar/SideBar';

const PrivateLayout = () => {
    const [isOpen, setIsOpen] = useState(true);

    console.log(isOpen);

    return (
        <>
            <div className='flex'>
                <div className=''>
                    <SideBar />
                </div>
                <div className='w-full p-10'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default PrivateLayout;