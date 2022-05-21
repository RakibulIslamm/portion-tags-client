import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Login from '../Login/Login';
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
                </Route>

            </Routes>
        </>
    );
};

export default Layouts;