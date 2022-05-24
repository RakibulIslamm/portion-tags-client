import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import userImg from '../../../images/user.png'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user } = useAuth();
    // const isStickyClass = 'sticky top-0 w-full z-50 shadow bg-red-500'

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('header');
        const scrollTop = window.scrollY;
        scrollTop ? header.classList.add('sticky', 'top-0', 'bg-white', 'z-50', 'shadow-xl', 'transition-all', 'ease-linear', 'duration-200', 'text-black', 'h-[45px]', 'border-gray-400', 'bg-filter', 'backdrop-blur-lg') : header.classList.remove('top-0', 'bg-white', 'shadow-xl', 'transition-all', 'ease-linear', 'duration-200', 'border-gray-400', 'text-black', 'h-[45px]');
    };

    return (
        <header className='max-w-[1920] px-[80px] h-[60px] flex justify-between items-center sticky z-50 text-white mix-blend-difference border-b border-gray-600'>
            <h1 className='text-2xl font-bold uppercase'><Link to='/'>Portion Tags</Link></h1>
            <div>
                <nav className='flex items-center gap-8 font-light tracking-widest'>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/about'>About</CustomLink>
                    <CustomLink to='/about'>Services</CustomLink>
                    <CustomLink to='/about'>Resources</CustomLink>
                </nav>
            </div>
            {user && <div className='flex items-center gap-5'>
                <Link to='/dashboard'>Dashboard</Link>
                <img className='w-7 h-7 bg-cover' src={user.photoURL || userImg} alt="" />
                {/* <div className='flex items-center gap-2'>
                        <p className='text-base font-semibold'>{user.displayName}</p>
                    </div> */}
            </div>}
            {!user && <div className='flex items-center gap-4'>
                <Link to='/login'>Login</Link>
                <Link className='px-4 py-1 bg-red-500 rounded-full text-white' to='/register'>Register</Link>
            </div>}
        </header>
    );
};

export default Header;