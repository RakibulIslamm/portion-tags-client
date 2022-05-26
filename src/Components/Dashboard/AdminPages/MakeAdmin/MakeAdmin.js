import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => {
        // console.log(data);
        fetch(`https://portion-tags.herokuapp.com/make-admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("successfully maded admin");
                }
                if (!data.modifiedCount) {
                    toast.success("This user already admin");
                }
                else if (data.error) {
                    toast.error(data.error);
                }
            })
            .catch(err => toast.error(err))
    }

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="-mt-20">
                <h2 className="text-3xl font-bold">Make an admin</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 xs:w-full xs:px-6 sm:w-full flex items-center flex-col">
                <input className="bg-gray-200 px-5 py-3 block w-8/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="email" {...register("email", { required: true })} placeholder="Email" />
                <button className="bg-yellow-500 text-gray-900 py-3 block px-5 outline-none rounded my-2 text-xl font-semibold" type="submit">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;