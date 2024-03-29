import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ order, handleDelete }) => {
    const { status, ProductName, quantity, paid, transactionId, img, productId, _id } = order;
    return (
        <tr>
            <td className="px-6 xs:px-2 py-4">
                <Link to={`/purchase/${productId}`}>
                    <div className="flex items-center space-x-3">
                        <div className="inline-flex w-10 h-10 bg-cover xs:hidden"> <img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src={img} /> </div>
                        <div>
                            <p> {ProductName} </p>
                        </div>
                    </div>
                </Link>
            </td>
            <td className="px-6 py-4">
                <p className="text-gray-500 text-sm font-semibold tracking-wide"> {quantity} </p>
            </td>
            <td className="px-6 py-4">
                <p className="text-gray-500 text-sm font-semibold tracking-wide">{status ? 'Shipped' : 'Pending'}</p>
            </td>
            <td className="px-6 py-4 text-center">
                {
                    !paid || !transactionId ?
                        <button onClick={() => handleDelete(_id)} className="text-white text-sm bg-red-600 font-semibold px-4 py-1 rounded-full"> Delete </button> :
                        <button className="text-white text-sm bg-green-400 font-semibold px-4 py-1 rounded-full"> Paid </button>}
            </td>
            <td className="px-6 py-4 text-center"> {
                !paid || !transactionId ? <Link to={`/dashboard/payment/${_id}`} className="text-purple-800 hover:underline">Payment</Link> :
                    <p>{transactionId}</p>
            }
            </td>
        </tr>
    );
};

export default MyOrderRow;