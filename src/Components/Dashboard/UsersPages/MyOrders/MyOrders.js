import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Alert from '../../../Alert/Alert';
import MyOrderRow from './MyOrderRow/MyOrderRow';
import { confirmAlert } from 'react-confirm-alert';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user, logOut } = useAuth();

    useEffect(() => {
        setLoading(true);
        /* fetch(`https://portion-tags.herokuapp.com/myorders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false)); */

        fetch(`http://localhost:5000/myorders?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.statusCode === 403) {
                    // logOut()
                }
                else {
                    setOrders(data.reverse());
                }
            })
            .catch(err => {
                console.log(err.code);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [user]);




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

    return (
        <div className='min-h-screen'>
            <div className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] mx-auto'>
                <div className='my-5 flex items-center gap-5'>
                    <h2 className='text-2xl xs:text-lg xs:w-full font-semibold'>My Orders</h2>
                </div>
                <div className='overflow-x-auto border'>
                    <table className='mx-auto w-full rounded-lg bg-white divide-y divide-gray-300'>
                        <thead className="bg-gray-900 w-full">
                            <tr className="text-white text-left">
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Item </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Quantity </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Status</th>
                                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Action </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Payment Id</th>
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
                                        <p className="text-gray-500 text-xl font-semibold tracking-wide"> You Have No Order </p>
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