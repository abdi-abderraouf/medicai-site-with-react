import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../Nav/Navbar';
import { Fragment } from 'react';
import Footer from '../Footer/Footer';

const Layout = () => {
    return(
        <Fragment>
        <Navbar/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
        </Fragment>
    )
}
export default Layout;