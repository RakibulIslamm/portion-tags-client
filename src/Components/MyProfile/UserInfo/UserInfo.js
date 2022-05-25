import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserInfo = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className='text-left text-2xl font-bold mb-4'>My Profile</h1>
            <div className=' space-y-2'>
                <img src={user.photoURL} className='rounded-full' alt="" />
                <h1 className='text-left text-base font-semibold'>Name: {user.displayName}</h1>
                <h1 className='text-left text-base font-semibold'>Email: {user.email}</h1>
                <h1 className='text-left text-base font-semibold'>Phone: +881234567890</h1>
            </div>
        </div>
    );
};

export default UserInfo;