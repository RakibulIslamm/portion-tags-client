import React from 'react';
import customLink from '../CustomLink/CustomLink';
import { BsPerson, BsBook, BsGeoAlt, BsLink, BsPencilSquare } from 'react-icons/bs';
import Header from '../Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';

const MyProfile = () => {
    const { SideBarLink } = customLink();
    return (
        <div>
            <Header />
            <div className='px-[80px] max-w-[1920px] mx-auto'>
                <div className='flex items-center w-full min-h-screen'>
                    <div className='flex items-start gap-6 w-full'>
                        <div className='w-[250px] min-h-[80vh] -mt-10 p-4 bg-gray-900 text-white rounded-xl flex flex-col justify-between'>
                            <div className='space-y-3'>
                                <SideBarLink to='/profile'>
                                    <span className="flex items-center p-2 space-x-3 rounded-md">
                                        <BsPerson className='text-xl' />
                                        <span>My Profile</span>
                                    </span>
                                </SideBarLink>
                                <SideBarLink to='/profile/education'>
                                    <span className="flex items-center p-2 space-x-3 rounded-md">
                                        <BsBook className='text-xl' />
                                        <span>Education</span>
                                    </span>
                                </SideBarLink>
                                <SideBarLink to='/profile/address'>
                                    <span className="flex items-center p-2 space-x-3 rounded-md">
                                        <BsGeoAlt className='text-xl' />
                                        <span>Address</span>
                                    </span>
                                </SideBarLink>
                                <SideBarLink to='/profile/social-link'>
                                    <span className="flex items-center p-2 space-x-3 rounded-md">
                                        <BsLink className='text-xl' />
                                        <span>Social Link</span>
                                    </span>
                                </SideBarLink>
                            </div>
                            <Link className='px-3 py-2 bg-blue-800 w-full rounded flex items-center gap-3' to='/profile/edit-profile'><BsPencilSquare /> Edit Profile</Link>
                        </div>
                        <div className='-mt-6 flex-1'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;