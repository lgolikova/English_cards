import React from 'react';
import "./header.scss";

function Header() {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img className='header_img' src='studying2.png' alt='logo' />
                <div className='header_appname'>Learning English words</div>
            </div>
            <div className='header_nav'>
                <a href='#'>Wordlist</a>
                <a href='#'>Wordcards</a>
            </div>
        </div>
    );
}

export default Header;