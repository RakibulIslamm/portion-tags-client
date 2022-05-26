import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useUserData from '../../../hooks/useUserData';

const Address = () => {
    const { user } = useAuth();
    const { data, isLoading } = useUserData(user.email);
    if (isLoading) {
        return;
    }
    // console.log(data);
    // const { country, street, zip } = data?.userInfo?.addressInfo;
    return (
        <div>
            <h1 className='text-left text-2xl font-bold mb-4'>Address</h1>
            {
                !data?.userInfo ? 'Address is Not Set Yet' :
                    <div>
                        <h1 className='text-left text-xl font-semibold'>Country: {data?.userInfo?.addressInfo?.country}</h1>
                        <p className='text-left text-base font-semibold'>Street: {data?.userInfo?.addressInfo?.street}</p>
                        <p className='text-left text-base font-semibold'>Zip: {data?.userInfo?.addressInfo?.zip}</p>
                    </div>
            }
        </div>
    );
};

export default Address;