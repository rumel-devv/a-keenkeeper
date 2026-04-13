import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { FaHome } from 'react-icons/fa';
import { IoMdTimer } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';



const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-3 md:px-20">

            <div className="navbar-start">
                <img src={logo} alt='logo' className="w-30" />
            </div>

            <div className="navbar-end">
                <ul className="menu menu-horizontal px-4 space-x-4 hidden lg:flex text-[16] font-semibold">
                    <li><NavLink to="/"> <FaHome/> Home</NavLink></li>
                    <li><NavLink to="/timeline"> <IoMdTimer/> Timeline</NavLink></li>
                    <li><NavLink to="/stats"> <ImStatsDots /> Stats</NavLink></li>
                </ul>
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> 
                        </svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content right-0 mt-3 w-40 shadow bg-base-100 rounded-box space-y-4">
                        <li><NavLink to="/"> <FaHome/> Home</NavLink></li>
                    <li><NavLink to="/timeline"> <IoMdTimer/> Timeline</NavLink></li>
                    <li><NavLink to="/stats"> <ImStatsDots /> Stats</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;