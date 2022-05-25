import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../../images/user.png'
import useAuth from '../../../hooks/useAuth';
import customLink from '../../CustomLink/CustomLink';
import { BsNutFill } from 'react-icons/bs'

const Header = () => {
    const { user, logOut } = useAuth();
    const { HeaderLink } = customLink();

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
            <div className='flex items-center gap-3'>
                <BsNutFill className='text-2xl' />
                <h1 className='text-2xl font-bold uppercase'><Link to='/'>Portion Tags</Link></h1>
            </div>
            <div>
                <nav className='flex items-center gap-8 font-light tracking-widest'>
                    <HeaderLink to='/'>Home</HeaderLink>
                    <HeaderLink to='/about'>About</HeaderLink>
                    <HeaderLink to='/about'>Services</HeaderLink>
                    <HeaderLink to='/about'>Resources</HeaderLink>
                </nav>
            </div>
            {user && <div className='flex items-center gap-5'>
                <button onClick={logOut}>Log Out</button>
                <Link to='/dashboard'>Dashboard</Link>
                <img className='w-7 h-7 bg-cover' src={userImg} alt="" />
            </div>}
            {!user && <div className='flex items-center gap-4'>
                <Link to='/login'>Login</Link>
                <Link className='px-4 py-1 bg-red-500 rounded-full text-white' to='/register'>Register</Link>
            </div>}
        </header>
    );
};

export default Header;