import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useUserData from '../../../hooks/useUserData';

const SocialLink = () => {
    const { user } = useAuth();
    const { data, isLoading } = useUserData(user.email);
    if (isLoading) {
        return;
    }
    console.log(data);
    const { linkedin, twitter } = data.userInfo.socialInfo;
    return (
        <div>
            <h1 className='text-left text-2xl font-bold mb-4'>Social Link</h1>
            <div className=' space-y-2'>
                <Link className='text-lg text-blue-700 font-medium' target='_blank' to={linkedin}>Linkedin</Link><br />
                <Link className='text-lg text-blue-700 font-medium' target='_blank' to={twitter}>Twitter</Link>
            </div>
        </div>
    );
};

export default SocialLink;