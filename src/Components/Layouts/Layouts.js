import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import AddProduct from '../Dashboard/AdminPages/AddProduct/AddProduct';
import AllUsers from '../Dashboard/AdminPages/AllUsers/AllUsers';
import ManageAllOrders from '../Dashboard/AdminPages/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from '../Dashboard/AdminPages/ManageAllProducts/ManageAllProducts';
import Dashboard from '../Dashboard/Dashboard';
import AddReview from '../Dashboard/UsersPages/AddReview/AddReview';
import MyOrders from '../Dashboard/UsersPages/MyOrders/MyOrders';
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
                    <Route path='my-orders' element={<MyOrders />} />
                    <Route path='add-review' element={<AddReview />} />
                    <Route path='manage-orders' element={<AdminRoute> <ManageAllOrders /> </AdminRoute>} />
                    <Route path='manage-products' element={<AdminRoute> <ManageAllProducts /> </AdminRoute>} />
                    <Route path='add-product' element={<AdminRoute> <AddProduct /> </AdminRoute>} />
                    <Route path='all-users' element={<AdminRoute> <AllUsers /> </AdminRoute>} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <ToastContainer />
        </>
    );
};

export default Layouts;