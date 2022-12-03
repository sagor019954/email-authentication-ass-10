import { Container } from 'postcss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Blog from '../Common/Blog';
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';
import Coursecontainer from '../Components/Coursecontainer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen m-10'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;