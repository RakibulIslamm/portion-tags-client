import { Outlet } from 'react-router-dom';
import SideBar from '../../Dashboard/SideBar/SideBar';
import 'react-modern-drawer/dist/index.css'
import { useState } from 'react';
import MobileSideBar from '../../Dashboard/SideBar/MobileSideBar';
import { AiOutlineMenu } from 'react-icons/ai';

const PrivateLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <div className='px-6 py-3 hidden xs:block'>
                <button onClick={toggleDrawer}>
                    <AiOutlineMenu className='text-xl' />
                </button>
            </div>
            <div className='flex bg-gray-100'>
                <div className='xs:hidden'>
                    <SideBar />
                </div>
                <div className='hidden xs:block'>
                    <MobileSideBar toggleDrawer={toggleDrawer} isOpen={isOpen} />
                </div>
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default PrivateLayout;