import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const EditProfile = () => {
    const { user } = useAuth();
    const [currentUser, setCurrentUser] = useState(user);
    const { data: currentUserData, isLoading } = useQuery("user", async () => {
        const { data } = await axios.get(
            `http://localhost:5000/user/${user.email}`
        );
        if (isLoading) {
            return;
        }
        setCurrentUser(currentUserData);
        return data;
    });

    // console.log(currentUser);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const displayName = e.target.displayName.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const educationLevel = e.target.education_level.value;
        const degree = e.target.degree.value;
        const institution = e.target.institution.value;
        const country = e.target.country.value;
        const street = e.target.street.value;
        const zip = e.target.zip.value;
        const linkedin = e.target.linkedin.value;
        const twitter = e.target.twitter.value;

        const profileData = {
            generalInfo: { displayName, email, phone },
            educationInfo: { educationLevel, degree, institution },
            addressInfo: { country, street, zip },
            socialInfo: { linkedin, twitter }
        }
        // console.log(profileData);

        // update profile
        fetch(`http://localhost:5000/user/${currentUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Profile updated successfully!');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="">
            <div className="mb-5">
                <div className="px-4 sm:px-0">
                    <h3 className="text-2xl font-medium leading-6 text-gray-900">Edit Profile</h3>
                    <p className="mt-1 text-sm text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>
                </div>
            </div>
            <div className="shadow border p-5">
                <form onSubmit={handleOnSubmit} className='space-y-5'>
                    {/* General Info */}
                    <div>
                        <h1 className='text-xl font-bold'>General Info</h1>
                        <div className='mt-3 space-y-4'>
                            <div>
                                <label htmlFor="">Name</label><br />
                                <input name='displayName' className='px-4 py-2 border border-gray-500 w-full rounded' value={user.displayName} disabled />
                            </div>
                            <div>
                                <label htmlFor="">Email</label><br />
                                <input name='email' className='px-4 py-2 border border-gray-500 w-full rounded' type="text" value={user.email} disabled />
                            </div>
                            <div>
                                <label htmlFor="">Phone Number</label><br />
                                <input name='phone' className='px-4 py-2 border border-gray-500 w-full rounded' type="text" placeholder='Phone Number' />
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h1 className='text-xl font-bold'>Education</h1>
                        <div className='mt-3 space-y-4'>
                            <div>
                                <label htmlFor="">Education level</label><br />
                                <input name='education_level' className='px-4 py-2 border border-gray-500 w-full rounded' type="text" placeholder='Education level' />
                            </div>
                            <div>
                                <label htmlFor="">Exam/Degree Title</label><br />
                                <input name='degree' className='px-4 py-2 border border-gray-500 w-full rounded' type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Institution Name</label><br />
                                <input name='institution' className='px-4 py-2 border border-gray-500 w-full rounded' type="text" />
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <h1 className='text-xl font-bold'>Address</h1>
                        <div className='mt-3 space-y-4'>
                            <div>
                                <label htmlFor="">Country</label><br />
                                <input name='country' className='px-4 py-2 border border-gray-500 w-full rounded' type="text" placeholder='Country' />
                            </div>
                            <div className='flex items-center gap-5'>
                                <div className='flex-1'>
                                    <label htmlFor="">Street Address</label><br />
                                    <input name='street' className='px-4 py-2 border border-gray-500 w-full rounded' type="text" />
                                </div>
                                <div className='flex-3'>
                                    <label htmlFor="">Zip Code</label><br />
                                    <input name='zip' className='px-4 py-2 border border-gray-500 w-full rounded' type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Link */}
                    <div>
                        <h1 className='text-xl font-bold'>Social Link</h1>
                        <div className='mt-3 space-y-4'>
                            <div>
                                <label htmlFor="">Linked In</label><br />
                                <input name='linkedin' className='px-4 py-2 border border-gray-500 w-full rounded' type="text" placeholder='https://linkedin.com/example' />
                            </div>
                            <div>
                                <label htmlFor="">Twitter</label><br />
                                <input name='twitter' className='px-4 py-2 border border-gray-500 w-full rounded' type="text" placeholder='https://twitter.com/example' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='px-8 py-2 bg-blue-600 text-white inline-block'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;