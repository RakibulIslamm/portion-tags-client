import React, { useState } from 'react';
import SideBar from './SideBar/SideBar';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    const admin = true;
    const user = true;

    console.log(isOpen);

    return (
        <>
            Welcome To Dashboard
        </>
    );
};

export default Dashboard;