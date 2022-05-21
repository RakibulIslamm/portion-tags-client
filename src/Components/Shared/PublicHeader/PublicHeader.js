import React from 'react';
import { Link } from 'react-router-dom';

const PublicHeader = () => {
    return (
        <div className='bg-pink-100'>
            <div className=' max-w-[1920] px-[80px] py-[20px] flex justify-between items-center'>
                <h1>Logo</h1>
                <div>
                    <nav className='space-x-8'>
                        <Link className='hover:border-b-4 px-1 border-gray-700 py-[20px]' to='/'>Home</Link>
                        <Link to='/'>About</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                        <Link to='/'>Contact</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PublicHeader;