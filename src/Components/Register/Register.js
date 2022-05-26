import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signUp, googleSignIn, savedDataOnDb, user, setUser, isLoading, error, setError, logOut } = useAuth();

    const navigate = useNavigate()
    const location = useLocation();

    const onSubmit = data => {
        const name = data.firstName + ' ' + data.lastName;
        const email = data.email;
        const password = data.password;
        signUp(email, password, name, reset, navigate)

    };

    const handleGoogleLogin = () => {
        const url = location?.state?.from || '/dashboard';
        googleSignIn()
            .then(result => {
                setUser(result.user);
                savedDataOnDb(result.user.displayName, result.user.email);
                navigate(url);
            })
    }

    useEffect(() => {
        setError(false)
    }, [setError]);

    // Handle Logout
    const handleLogOut = () => {
        logOut();
    }


    return (
        <div className='flex justify-center items-center min-h-screen py-10 -mt-[20px]'>
            {!user ? <div className="p-8 rounded-lg shadow-lg bg-white max-w-lg border">
                <h2 className='text-2xl font-bold text-center pb-8'>Register</h2>
                {error && <p className='text-red-500 text-md font-semibold italic'>{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 xs:grid-cols-1 gap-4">
                        <div className="form-group mb-6">
                            <input type="text" {...register("firstName", { required: true })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="First name" />
                            <p className='text-red-400 text-xs italic'>{errors.firstName?.type === 'required' && "First Name is required"}</p>
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" {...register("lastName", { required: true })} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Last name" />
                            <p className='text-red-400 text-xs italic'>{errors.lastName?.type === 'required' && "Last Name is required"}</p>
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" {...register("email", { required: true })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email address" />
                        <p className='text-red-400 text-xs italic'>{errors.email?.type === 'required' && "Email is required"}</p>
                    </div>
                    <div className="form-group mb-6">
                        <input type="password" {...register("password", { required: true })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password" />
                        <p className='text-red-400 text-xs italic'>{errors.password?.type === 'required' && "Password is required"}</p>
                    </div>
                    <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{isLoading ? 'Loading...' : 'Sign up'}</button>
                    <p className="text-gray-800 mt-6 text-center">Already registered ? <Link to="/login"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Login</Link>
                    </p>
                </form>
                <div className='flex justify-center items-center flex-col'>
                    <button onClick={handleGoogleLogin} className="text-red-600 px-3 py-1 flex justify-center items-center gap-3 border mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg> Sign in with google
                    </button>
                </div>
            </div> : <p>You are already logged in <br /><button className='text-blue-500' onClick={handleLogOut}>Log Out</button></p>}
        </div>
    );
};

export default Register;