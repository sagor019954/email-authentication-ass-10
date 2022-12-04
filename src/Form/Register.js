import React, { useContext, useState } from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AuthContext } from '../Authcontext/Authfile'

const Register = () => {
    const [photo, setPhoto] = useState('')
    const handlechange = (event) => {
        const photo = event.target.value;
        setPhoto(photo);
    }

    const { createEmail, verifyEmail, updateUserProfile } = useContext(AuthContext)
    const handleregister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleEmailVerification()
                handleUpdateUserProfile(name, photo)
            })
            .catch(error => {
                console.error(error);
            })

    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }



    return (
        <div className='w-1/2 mx-auto bg-gray-100 '>
            <form onSubmit={handleregister} className='m-8'>
                <p className='text-center pt-5 font-black text-4xl'>Register Form !!</p>
                <div className="mb-6 pt-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                    <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
                </div>
                <div className="mb-6 ">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
                </div>
                <div className="mb-6 mt-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 " id="user_avatar">Upload Photo</label>
                    <input onChange={handlechange} name="photoUrl" placeholder='Please give photo Url ' className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="name" />
                </div>
                <div className="flex items-start mb-6 mt-2">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <div className='flex  place-content-between pb-5'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login<BsFillArrowRightCircleFill className='inline ml-5'></BsFillArrowRightCircleFill></button>
                </div>
            </form>
        </div>
    );
};

export default Register;