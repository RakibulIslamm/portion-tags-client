import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicHeader from '../../Shared/PublicHeader/PublicHeader';

const PublicLayout = () => {
    return (
        <>
            <PublicHeader />
            <Outlet />
        </>
    );
};

export default PublicLayout;