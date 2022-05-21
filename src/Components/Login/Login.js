import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();


    let from = location.state?.from?.pathname || "/";

    return (
        <div>
            This is login
        </div>
    );
};

export default Login;