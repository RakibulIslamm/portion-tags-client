import React from 'react';

const Dashboard = () => {

    const admin = false;
    const user = true;

    return (
        <>
            <div>
                {
                    admin && user ? <div>Admin Sidebar</div> :
                        <div>User Sidebar</div>
                }
            </div>
        </>
    );
};

export default Dashboard;