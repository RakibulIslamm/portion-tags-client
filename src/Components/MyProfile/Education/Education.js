import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useUserData from '../../../hooks/useUserData';

const Education = () => {
    const { user } = useAuth();
    const { data, isLoading } = useUserData(user.email);
    if (isLoading) {
        return;
    }
    // console.log(data);
    // const { institution, educationLevel, degree } = data.userInfo.educationInfo;
    return (
        <div>
            <h1 className='text-left text-2xl font-bold mb-4'>Education</h1>
            {
                !data?.userInfo ? 'Education is Not Set Yet' :
                    <div>
                        <p className='text-left text-base font-semibold'>{data.userInfo.educationInfo?.degree} in {data.userInfo.educationInfo?.educationLevel} at</p>
                        <h1 className='text-left text-xl font-semibold'>Institute: {data.userInfo.educationInfo?.institution}</h1>
                    </div>
            }
        </div>
    );
};

export default Education;