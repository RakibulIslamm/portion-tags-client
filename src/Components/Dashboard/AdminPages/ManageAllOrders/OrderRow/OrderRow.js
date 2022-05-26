import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, handleDelete, shippedOrder }) => {
    const { status, quantity, ProductName, img, email, _id, productId, paid, transectionId } = order;

    return (
        <tr>
            <td className="px-6 xs:px-2 py-4">
                <Link to={`/purchase/${productId}`}>
                    <div className="flex items-center space-x-3 xs:space-x-0">
                        <div className="inline-flex w-10 h-10 bg-cover"> <img className='w-10 h-10 object-cover rounded-full xs:hidden' alt='User avatar' src={img} /> </div>
                        <div>
                            <p> {ProductName} </p>
                        </div>
                    </div>
                </Link>
            </td>
            <td className="px-6 xs:px-2 py-4">
                <p className="text-gray-500 text-xs font-base tracking-wide break-all"> {email} </p>
            </td>
            <td className="px-6 xs:px-2 py-4">
                <p className="text-gray-500 text-sm font-semibold tracking-wide text-center">{quantity}</p>
            </td>
            <td className="px-6 xs:px-2 py-4">
                <div className='flex items-center xs:flex-col gap-3'>
                    <p className="text-gray-500 text-sm font-semibold tracking-wide">{status ? 'Shipped' : 'Pending'}</p>
                    {!status && <button onClick={() => shippedOrder(_id)} className='text-sm bg-yellow-500 px-1 rounded-full'>Approve</button>}
                </div>
            </td>
            <td className="px-6 xs:px-2 py-4 text-center">
                {!paid || !transectionId ? <button onClick={() => handleDelete(_id)} className="text-white text-sm bg-red-600 font-semibold px-4 py-1 rounded-full"> Delete </button> : <p className="text-gray-500 text-sm font-semibold tracking-wide">Paid</p>}
            </td>
            <td className="px-6 py-4 text-center"> <p className='text-sm'>{paid || transectionId ? 'Paid' : 'Unpaid'}</p>
            </td>
        </tr>
    );
};

export default OrderRow;