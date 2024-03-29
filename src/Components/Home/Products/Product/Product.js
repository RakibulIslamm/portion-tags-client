import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { ProductName, price, img, minOrder, quantity, desc, rating, _id } = product;
    return (
        <div className="bg-white shadow-lg hover:shadow-xl rounded-lg border flex justify-between flex-col">
            <div className="flex justify-center items-center">
                <img className='w-[250px] h-[250px] object-contain' src={img} alt="" />
            </div>
            <div className='flex-1 flex justify-between flex-col'>
                <div className="flex justify-between items-start px-2 pt-2">
                    <div className="p-2 flex-1">
                        <h1 className="font-medium text-xl font-poppins">{ProductName}</h1>
                        <p className="text-gray-500 font-nunito">{desc.slice(0, 50)}...</p>
                    </div>
                    <div className="p-2 text-right">
                        <div className="text-teal-500 font-semibold text-lg font-poppins">${price}</div>
                        <div className="text-xs text-gray-500 font-poppins">Per item</div>
                        <div className="text-sm text-gray-500 font-poppins pt-2 flex items-center justify-end gap-1">{rating} <AiFillStar className='text-yellow-500 text-lg' /></div>
                    </div>
                </div>
                <div className="flex items-center px-2 pb-2">
                    <div className="w-1/2 p-2">
                        <Link to={`/purchase/${_id}`} className="bg-[#ee7422] text-white px-4 py-2 flex items-center gap-2">
                            <svg viewBox="0 0 24 24" className="inline w-4 h-4">
                                <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                            </svg> Buy Now
                        </Link>
                    </div>
                    <div className="w-1/2 p-2 text-right">
                        <p>{quantity} Items left</p>
                        <p className='text-xs'>Minimum order limit {minOrder}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;