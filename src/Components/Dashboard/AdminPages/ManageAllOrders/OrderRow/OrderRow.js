import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order }) => {
    const { status, quantity, ProductName, img, email } = order;
    return (
        <tr>
            <td className="px-6 py-4">
                <Link to={`/inventory-details/'{_id}'`}>
                    <div className="flex items-center space-x-3">
                        <div className="inline-flex w-10 h-10 bg-cover"> <img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src={img} /> </div>
                        <div>
                            <p> {ProductName} </p>
                        </div>
                    </div>
                </Link>
            </td>
            <td className="px-6 py-4">
                <p className="text-gray-500 text-sm font-semibold tracking-wide"> {email} </p>
            </td>
            <td className="px-6 py-4">
                <p className="text-gray-500 text-sm font-semibold tracking-wide">{quantity}</p>
            </td>
            <td className="px-6 py-4">
                <p className="text-gray-500 text-sm font-semibold tracking-wide">{status ? 'Shipped' : 'Pending'}</p>
            </td>
            <td className="px-6 py-4 text-center"> <button className="text-white text-sm bg-red-600 font-semibold px-4 py-1 rounded-full"> Delete </button> </td>
            <td className="px-6 py-4 text-center"> <Link to="/edit-inventory/id" className="text-purple-800 hover:underline">Paid</Link>
            </td>
        </tr>
    );
};

export default OrderRow;