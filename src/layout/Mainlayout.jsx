import React from 'react';
import Navbar from '../Componetns/ui/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componetns/ui/Footer';

const Mainlayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Mainlayout;