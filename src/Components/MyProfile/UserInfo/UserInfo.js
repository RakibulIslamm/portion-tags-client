import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useUserData from '../../../hooks/useUserData';

const UserInfo = () => {
    const { user } = useAuth();
    const { data, isLoading } = useUserData(user.email);
    if (isLoading) {
        return;
    }
    console.log(data);
    const { displayName, email } = data;
    return (
        <div>
            <h1 className='text-left text-2xl font-bold mb-4'>My Profile</h1>
            <div className=' space-y-2'>
                <img src={user.photoURL} className='rounded-full' alt="" />
                <h1 className='text-left text-base font-semibold'>Name: {displayName}</h1>
                <h1 className='text-left text-base font-semibold'>Email: {email}</h1>
                <h1 className='text-left text-base font-semibold'>Phone: {data.userInfo?.generalInfo?.phone}</h1>
            </div>
        </div>
    );
};

export default UserInfo;