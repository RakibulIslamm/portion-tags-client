import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    let { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageStorageKey = 'e911b7196eed8bf0e10bfe59de30c793';
    const [loading, setLoading] = useState(false);

    const onSubmit = data => {
        setLoading(true);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        // const url = `https://api.cloudinary.com/v1_1/dvqxqjqjy/image/upload?upload_preset=${imageStorageKey}`;
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imgUrl = result.data.url;
                    const product = {
                        ProductName: data.name,
                        img: imgUrl,
                        price: data.price,
                        desc: data.shortDesc,
                        rating: data.rating,
                        quantity: data.quantity,
                        minOrder: data.minOrder
                    }
                    console.log(product);
                    fetch('https://portion-tags.herokuapp.com/products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Product added successfully');
                            reset();
                        })
                        .catch(err => console.log(err))
                        .finally(() => {
                            setLoading(false);
                        })
                }
            })
            .catch(err => console.log(err));

    };


    return (
        <div className="w-full min-h-screen py-10 flex justify-center items-center flex-col">
            <div className="">
                <h2 className="text-3xl font-bold">Add a new product</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 xs:w-full sm:w-full flex items-center flex-col xs:px-6">
                <div className="w-8/12 xs:w-full flex items-center xs:flex-col gap-3 xs:gap-0">
                    <div className='w-full'>
                        <input className="bg-gray-200 px-5 py-3 block w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("name", { required: true })} placeholder="Product Title" />
                        {errors?.name?.type === "required" && <p className="text-left text-xs text-red-600 w-8/12">Title is required</p>}
                    </div>

                    <div className='w-6/12 xs:w-full'>
                        <input className="bg-gray-200 px-5 py-3 block w-full xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="number" {...register("price", { required: true })} placeholder="Price" />
                        {errors?.price?.type === "required" && <p className="text-left text-xs text-red-600 w-8/12">Price is required</p>}
                    </div>
                </div>


                <div className="w-8/12 xs:w-full flex items-center xs:flex-col gap-3 xs:gap-0">
                    <div className="w-6/12 xs:w-full">
                        <input className="bg-gray-200 px-5 py-3 block w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="number" {...register("quantity", { required: true })} placeholder="Quantity" />
                        {errors?.quantity?.type === "required" && <p className="text-left text-xs text-red-600 w-8/12">Title is required</p>}
                    </div>
                    <div className="w-6/12 xs:w-full">
                        <input className="bg-gray-200 px-5 py-3 block w-full xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="number" {...register("rating", { required: true })} placeholder="Rating" />
                        {errors?.rating?.type === "required" && <p className="text-left text-xs text-red-600 w-8/12">Price is required</p>}
                    </div>
                    <div className="w-6/12 xs:w-full">
                        <input className="bg-gray-200 px-5 py-3 block w-full xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="number" {...register("minOrder", { required: true })} placeholder="Minimum Order" />
                        {errors?.minOrder?.type === "required" && <p className="text-left text-xs text-red-600 w-8/12">Price is required</p>}
                    </div>
                </div>


                <input className="bg-gray-200 px-5 py-3 block w-8/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("shortDesc", { required: true, minLength: 30, maxLength: 200 })} placeholder="Short Dscription" />
                {errors?.shortDesc?.type === 'minLength' && <p className="text-left text-red-600 w-8/12">Minimum character is 30 max character is 100</p>}
                {errors?.shortDesc?.type === 'maxLength' && <p className="text-left text-red-600 w-8/12">Minimum character is 30 max character is 100</p>}


                <input className="bg-gray-200 px-5 py-3 block w-8/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="file" {...register("img", { required: true })} placeholder="Image url" />


                <textarea className="bg-gray-200 px-5 py-3 block w-8/12 xs:w-full outline-none focus:bg-white border focus:border-gray-500 rounded my-2" type="text" {...register("desc", { required: true })} placeholder="Description" />


                <button className="bg-yellow-500 text-gray-900 py-3 block px-5 outline-none rounded my-2 text-xl font-semibold" type="submit">{loading ? 'Loading...' : 'Add Product'}</button>
            </form>
        </div>
    );
};

export default AddProduct;