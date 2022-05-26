import React from 'react';
import { Link } from 'react-router-dom';

const ProductRow = ({ product, handleDelete }) => {
    const { ProductName, quantity, price, _id, img } = product;

    return (
        <tr>
            <td className="px-6 xs:px-2 py-4">
                <Link to={`/purchase/${_id}`}>
                    <div className="flex items-center space-x-3 xs:space-x-0">
                        <div className="inline-flex w-10 h-10 bg-cover"> <img className='w-10 h-10 object-cover rounded-full xs:hidden' alt='User avatar' src={img} /> </div>
                        <div>
                            <p> {ProductName} </p>
                        </div>
                    </div>
                </Link>
            </td>
            <td className="px-6 xs:px-2 py-4">
                <p className="text-gray-500 text-center text-base font-base tracking-wide break-all"> ${price} </p>
            </td>
            <td className="px-6 xs:px-2 py-4">
                <p className="text-gray-500 text-sm text-center font-semibold tracking-wide">{quantity}</p>
            </td>
            <td className="px-6 xs:px-2 py-4 text-center">
                <button onClick={() => handleDelete(_id)} className="text-white text-sm bg-red-600 font-semibold px-4 py-1 rounded-full"> Delete </button>
            </td>
            <td className="px-6 xs:px-2 py-4 text-center"> <p className='text-sm'></p>
            </td>
        </tr>
    );
};

export default ProductRow;