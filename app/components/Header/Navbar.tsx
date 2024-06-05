import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {
    return (
        <div className="z-10 flex justify-between px-10 py-5">
            <div>
                <h1 className='text-3xl font-semibold text-pink-600'> Code Duchess</h1>
            </div>
            <div>
                <div className='flex gap-4'>
                    <NavItem text="Home" href="/" />
                    <NavItem text="Resume" href="/resume" />
                    <NavItem text="Projects" href="/project" />
                    <NavItem text="Contact" href="/contact" />
                </div>
            </div>
        </div>
    )
}

export default Navbar