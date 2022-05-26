import { Outlet } from 'react-router-dom';
import SideBar from '../../Dashboard/SideBar/SideBar';

const PrivateLayout = () => {

    return (
        <>
            <div className='flex bg-gray-100'>
                <div className=' xs:hidden'>
                    <SideBar />
                </div>
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default PrivateLayout;