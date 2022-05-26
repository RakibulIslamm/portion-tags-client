import React, { useEffect, useState } from 'react';
import Alert from '../../../Alert/Alert';
import OrderRow from './OrderRow/OrderRow';
import { confirmAlert } from 'react-confirm-alert';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://portion-tags.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);


    const handleDelete = (id) => {
        const handleAlert = (close, confirmation) => {
            if (confirmation) {
                fetch(`https://portion-tags.herokuapp.com/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        setOrders(orders.filter(order => order._id !== id));
                    })
                    .catch(err => console.log(err))
                    .finally(() => setLoading(false));
            }
            else {
                close();
                setLoading(false);
            }
            close();
        }
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <Alert onClose={onClose} handleAlert={handleAlert} action='delete' />
                )
            }
        });
    }

    const shippedOrder = (id) => {
        const handleAlert = (close, confirmation) => {
            if (confirmation) {
                fetch(`https://portion-tags.herokuapp.com/orders/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: 'shipped'
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        const changedOrder = orders.map(order => {
                            if (order._id === id) {
                                order.status = 'shipped';
                            }
                            return order;
                        });
                        console.log(changedOrder);
                        setOrders(changedOrder);
                    })
                    .catch(err => console.log(err))
                    .finally(() => setLoading(false));
            }
            else {
                close();
                setLoading(false);
            }
            close();
        }
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <Alert onClose={onClose} handleAlert={handleAlert} action='Approve' />
                )
            }
        });

    }


    return (
        <div className='min-h-screen'>
            <div className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] mx-auto'>
                <div className='my-5 flex items-center gap-5'>
                    <h2 className='text-2xl xs:text-lg xs:w-full font-semibold'>Manage Order</h2>
                </div>
                <div className='overflow-x-auto border w-full'>
                    <table className='mx-auto w-full rounded-lg bg-white divide-y divide-gray-300'>
                        <thead className="bg-gray-900 w-full">
                            <tr className="text-white text-left">
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Item </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Email </th>
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
                            </tbody> : <tbody className="divide-y divide-gray-200 w-full">
                                {orders.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete} shippedOrder={shippedOrder} />)}
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;