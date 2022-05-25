import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { googleSignIn, login, user, setUser, isLoading, isLoading2, logOut, error, setError } = useAuth()
    console.log(user);

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setError(false)
    }, [setError]);


    const handleGoogleLogin = () => {
        const url = location?.state?.from || '/dashboard';
        googleSignIn()
            .then(result => {
                setUser(result.user);
                navigate(url);
            })
    }

    // Handle Login
    const onSubmit = data => {
        login(data.email, data.password, location, navigate, reset);
    };

    if (isLoading2) {
        return
    }

    // Handle Logout
    const handleLogOut = () => {
        logOut();
    }


    return (
        <div className='flex justify-center items-center min-h-screen py-10'>
            {!user && <div className="block p-6 rounded-lg shadow-lg bg-white border w-2/6">
                <h2 className='text-2xl font-bold text-center pb-8'>Login</h2>
                {error && <p className='text-red-500 text-md font-semibold italic'>{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input type="email" {...register("email", { required: true })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter email" />
                        <p className='text-red-400 text-xs italic'>{errors.email?.type === 'required' && "Email is required"}</p>
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input type="password" {...register("password", { required: true })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                        <p className='text-red-400 text-xs italic'>{errors.password?.type === 'required' && "Password is required"}</p>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <button className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot password?</button>
                    </div>
                    <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{isLoading ? 'Loading...' : 'Login'}</button>
                    <p className="text-gray-800 mt-6 text-center">Not a member? <Link to="/register"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</Link>
                    </p>
                </form>
                <div className='flex justify-center items-center flex-col'>
                    <button onClick={handleGoogleLogin} className="text-red-600 px-3 py-1 flex justify-center items-center gap-3 border mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg> Sign in with google
                    </button>
                </div>
            </div>} {user && <p>You are already logged in <br /><button className='text-blue-500' onClick={handleLogOut}>Log Out</button></p>}
        </div>
    );
};

export default Login;