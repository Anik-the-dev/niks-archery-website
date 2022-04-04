import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'



const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div className='project-body'>
            <div onClick={() => setMobileMenu(!mobileMenu)} className='hamburger-menu'>
                {mobileMenu ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <div className='project-container'>

                <div className='flex'>
                    <div className='project-logo'>
                        <h1>niksrchery.</h1>
                    </div>
                    <nav className={`navbar ${mobileMenu? 'top-50' : 'topMinus-120'}`}>
                        <Link to='/'>Home</Link>
                        <Link to='/reviews'>Reviews</Link>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/about'>About</Link>
                    </nav>

                </div>

            </div>

        </div>
    );
};

export default Header