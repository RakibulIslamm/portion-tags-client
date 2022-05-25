import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrderRow from './MyOrderRow/MyOrderRow';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user, isLoading } = useAuth();

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = () => {

    }

    return (
        <div className='min-h-screen'>
            <div className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] mx-auto'>
                <div className='my-5 flex items-center gap-5'>
                    <h2 className='text-2xl xs:text-lg xs:w-full font-semibold'>Manage Inventory</h2>
                </div>
                <div className='overflow-x-auto border'>
                    <table className='mx-auto w-full rounded-lg bg-white divide-y divide-gray-300'>
                        <thead className="bg-gray-900 w-full">
                            <tr className="text-white text-left">
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Item </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Quantity </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Status</th>
                                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Action </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> </th>
                            </tr>
                        </thead>
                        {
                            loading ? <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4">
                                        <p className="text-gray-500 text-xl font-semibold tracking-wide"> Loading... </p>
                                    </td>
                                </tr>
                            </tbody> : !orders.length ? <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4">
                                        <p className="text-gray-500 text-xl font-semibold tracking-wide"> Product Not Found </p>
                                    </td>
                                </tr>
                            </tbody> : <tbody className="divide-y divide-gray-200">
                                {orders.map(order => <MyOrderRow key={order._id} order={order} handleDelete={handleDelete} />)}
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;