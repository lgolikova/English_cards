import React from 'react';
import "./header.scss";
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className='header'>

            <Link to='/' className='header_logo'>
                <img className='header_img' src='./assets/images/studying2.png' alt='logo' />
                <div className='header_appname'>Learning English words</div>
            </Link>

            <div className='header_nav'>
                <Link to='/table'>Wordlist</Link>
                <Link to='/game'>Wordcards</Link>
            </div>
        </div>
    );
}

export default Header;