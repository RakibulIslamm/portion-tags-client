import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import ManageAllOrders from '../Dashboard/AdminPages/ManageAllOrders/ManageAllOrders';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PurchasePage from '../PurchasePage/PurchasePage';
import Register from '../Register/Register';
import Spinner from '../Spinner/Spinner';
import PrivateLayout from './PrivateLayout/PrivateLayout';
import PublicLayout from './PublicLayout/PublicLayout';

const Layouts = () => {
    const { isLoading2 } = useAuth();

    if (isLoading2) {
        return <Spinner />
    }

    return (
        <>
            <Routes>
                {/* These are public routes */}
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='/purchase/:id' element={<PrivateRoute><PurchasePage /></PrivateRoute>} />
                </Route>

                {/* These are dashboard routes */}
                <Route path='/dashboard' element={<PrivateRoute><PrivateLayout /></PrivateRoute>}>
                    <Route index element={<Dashboard />} />
                    <Route path='manage-all-orders' element={<AdminRoute> <ManageAllOrders /> </AdminRoute>} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <ToastContainer />
        </>
    );
};

export default Layouts;