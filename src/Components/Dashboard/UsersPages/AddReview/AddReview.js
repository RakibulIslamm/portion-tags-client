import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth'
import StarPicker from 'react-star-picker';
import { toast } from 'react-toastify';

const AddReview = () => {
    let { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    const [values, setValues] = useState({ rating: 4.5 });

    const onChange = (value, name) => {
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        // console.log(values);
    };

    const onSubmit = data => {
        setLoading(true);
        const ratingsData = { name: user.displayName, reviewText: data.reviewText, rating: values.rating, img: user.photoURL }
        fetch('https://portion-tags.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ratingsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Review added successfully!')
                    reset();
                }
                else {
                    toast.error('Something went wrong!')
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div>
            <div className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] min-h-screen mx-auto flex justify-center items-center flex-col'>
                <h1 className='text-2xl font-bold'>Please Add A Review</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 xs:w-full sm:w-full flex items-center flex-col">
                    <div className="w-full">
                        <div className='w-6/12 xs:w-full mx-auto'>
                            <input className="bg-gray-200 px-5 py-3 block w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("name")} value={user.displayName} disabled />
                        </div>

                        <div className='w-6/12 xs:w-full mx-auto'>
                            <textarea className="bg-gray-200 px-5 py-3 block w-full xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="number" {...register("reviewText", { required: true })} placeholder="Write Something" />
                            {errors?.price?.type === "required" && <p className="text-left text-xs text-red-600 w-8/12">This field is required</p>}
                        </div>
                    </div>
                    <StarPicker onChange={onChange} value={values.rating} initialValue halfStars name="rating" />
                    <button className="bg-yellow-500 text-gray-900 py-3 block px-5 outline-none rounded my-2 text-xl font-semibold" type="submit">{loading ? 'Loading...' : 'Submit Review'}</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;