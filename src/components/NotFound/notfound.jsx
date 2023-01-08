import React from 'react';
import "./notfound.scss";
import { Link } from "react-router-dom"


function NotFound() {
    return (
        <div className='notfound-container'>
            <img src='./assets/images/lost.jpg' alt="404" />
            <div className='notfound-text_container'>
                <div className='t404'>404</div>
                <div className='notfound-title'>UH OH! You're lost.</div>
                <div className='notfound-text'>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</div>
                <button className='btn-404'>HOME</button>
            </div>
        </div>
    );
}

export default NotFound;