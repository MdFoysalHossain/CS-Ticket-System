import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='bg-white w-full'>
            <div className="navbar lg:flex mx-auto max-w-[1440px] bg-white">
                <div className="navbar-start lg:flex-1">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-[#eeeeee] text-[#130B2D] border-none shadow-none lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white text-[#130B2D] gap-1 rounded-box z-1 mt-4 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <a className="btn border-none mt-1 shadow-none bg-gradient-to-br  from-[#632EE3] to-[#9F62F2]">+ New Ticket</a>
                    </ul>
                    
                    </div>
                    <a className="btn bg-transparent shadow-none border-none text-xl font-inter font-bold text-[#130B2D]">CS — Ticket System</a>
                </div>
                <div className="navbar-end lg:flex-2 font-inter hidden lg:flex text-black">
                    <ul className="menu menu-horizontal px-1 lg:gap-1 ">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    
                    <a className="btn border-none shadow-none bg-gradient-to-br  from-[#632EE3] to-[#9F62F2]">+ New Ticket</a>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;