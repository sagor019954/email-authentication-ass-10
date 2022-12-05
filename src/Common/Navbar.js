import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authcontext/Authfile';
import { HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const handleSingout = () => {
        logOut()
            .then(() => {
                // const user = result.user;
                // console.log(user);
                alert('sucssfull')
            })
            .catch(error => {
                console.error(error);
            })
    }
    console.log(user);
    // const name = user.displayName;
    return (
        <div>
            <nav className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Grema Learning</span>
                    </a>
                    <div className="flex items-center md:order-2">

                        {
                            user?.uid ? <p className='text-white mr-2'>{user.displayName}</p> :
                                <span></span>
                        }
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            {
                                user?.emailVerified ? <>   <img className="w-8 h-8 rounded-full" src={user.photoURL} alt="user photo" /></>
                                    : <> <HiOutlineUserCircle className='text-white m-2'></HiOutlineUserCircle></>
                            }
                        </button>
                        <div className='m-2'>

                            {
                                user?.emailVerified ? <> <button onClick={handleSingout} className="btn pl-1 text-white  btn-secondary">Sign Out</button></>
                                    : <>  <Link to="/login">  <button className="btn m-2 text-white btn-primary">Login</button></Link>
                                        <Link to="/register">  <button className="btn text-white  btn-secondary">Register</button></Link></>
                            }


                        </div>
                    </div>
                    <div className="items-center  justify-between  w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to='/courses' href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Courses</Link>
                            </li>
                            <li>
                                <Link to='/blog' href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;