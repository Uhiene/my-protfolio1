"use client"
import React, { useState } from 'react';
import NavItem from './NavItem';
import Link from 'next/link';
import { TiThMenuOutline } from 'react-icons/ti';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="z-10 flex justify-between px-8 lg:px-10 py-5 relative">
            <Link href="/">
                <h1 className='text-xl md:text-2xl italic gradient-text logo'>Code Duchess</h1>
            </Link>
            <div className="lg:hidden"> 
                <button onClick={toggleMenu} className="text-pink-600">
                    <TiThMenuOutline />
                </button>
            </div>
            <div className={`${menuOpen ? 'block absolute top-16 left-0 w-full text-center p-5 element slide-down slide-up bg-white' : 'hidden'} lg:flex gap-4`}>
                <NavItem text="Home" href="/" />
                <NavItem text="Resume" href="/resume" />
                <NavItem text="Projects" href="/project" />
                <NavItem text="Contact" href="/contact" />
            </div>

        </nav>
    );
};

export default Navbar;
