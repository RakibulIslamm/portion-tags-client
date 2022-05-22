import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import PublicFooter from '../../Shared/PublicFooter/PublicFooter';

const PublicLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <PublicFooter />
        </>
    );
};

export default PublicLayout;