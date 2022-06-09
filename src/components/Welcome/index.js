import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Welcome () {
    return (
        <div>
            <h1>Welcome</h1>
            <Link className='noDecoration' to='/Main'>Enter</Link>
        </div>
    )
}

export default Welcome;