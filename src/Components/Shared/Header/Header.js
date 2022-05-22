import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import userImg from '../../../images/user.png'

const Header = () => {
    const user = true;
    return (
        <div className='border bg-white sticky top-0'>
            <div className='shadow max-w-[1920] px-[80px] py-[14px] flex justify-between items-center'>
                <h1 className='text-2xl font-bold uppercase'><Link to='/'>Portion Tags</Link></h1>
                <div>
                    <nav className='flex items-center gap-8'>
                        <CustomLink to='/'>Home</CustomLink>
                    </nav>
                </div>
                {user && <div className='flex items-center gap-8'>
                    <Link to='/dashboard'>Dashboard</Link>
                    <div className='flex items-center gap-2'>
                        <img className='w-7 h-7 bg-cover' src={userImg} alt="" />
                        <p className='text-base font-semibold'>Rakibul Islam</p>
                    </div>
                </div>}
                {!user && <div className='flex items-center gap-4'>
                    <Link to='/login'>Login</Link>
                    <Link className='px-4 py-1 bg-red-500 rounded-full text-white' to='/register'>Register</Link>
                </div>}
            </div>
        </div>
    );
};

export default Header;