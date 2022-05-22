import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from '../AdminRoute/AdminRoute';
import ManageAllOrders from '../Dashboard/AdminPages/ManageAllOrders/ManageAllOrders';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PrivateLayout from './PrivateLayout/PrivateLayout';
import PublicLayout from './PublicLayout/PublicLayout';

const Layouts = () => {
    return (
        <>
            <Routes>
                {/* These are public routes */}
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                </Route>

                {/* These are private routes */}
                <Route path='/dashboard' element={<PrivateRoute><PrivateLayout /></PrivateRoute>}>
                    <Route index element={<Dashboard />} />
                    <Route path='manage-all-orders' element={<AdminRoute> <ManageAllOrders /> </AdminRoute>} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Layouts;