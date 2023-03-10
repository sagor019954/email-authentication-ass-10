import React, { useContext } from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authcontext/Authfile';
const Login = () => {

    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handlelogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                // (from, { replace: true })
                navigate(from, { replace: true })
            })
    }
    return (
        <div className='lg:w-1/2 sm:w-full mx-auto bg-gray-300 '>
            <form onSubmit={handlelogin} className='mx-8'>
                <p className='text-center pt-5 font-black text-4xl'>Log In  !!</p>
                <div className="mb-6 pt-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
                </div>
                <div className="mb-6 mt-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required />
                </div>
                <div className='flex  place-content-between pb-5'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log in</button>
                    {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register<BsFillArrowRightCircleFill className='inline ml-5'></BsFillArrowRightCircleFill></button> */}
                </div>
            </form>
            <p className='ml-8 pb-6 '>Are you want to <Link className='text-blue-500 underline' to="/register">Register</Link> ??</p>
        </div>
    );
};

export default Login;