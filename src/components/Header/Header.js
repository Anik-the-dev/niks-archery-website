import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';


const Header = () => {
    return (
        <div className='project-body'>
            <div className='project-container'>
                <div className='project-logo'>
                    <h1>niksrchery.</h1>
                </div>
                <nav className='navbar'>
                    <Link to= '/'>Home</Link>
                    <Link to= '/reviews'>Reviews</Link>
                    <Link to= '/dashboard'>Dashboard</Link>
                    <Link to= '/blog'>Blog</Link>
                    <Link to= '/about'>About</Link>
                </nav>

            </div>

        </div>
    );
};

export default Header