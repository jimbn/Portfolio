import React from "react";
import { Link } from "react-router-dom";
import  './style.css';

function Header () {

    return (
        
        <div className="header-style">
            <div className="header-nav">
                <ul>
                    <li>
                        <Link className='link-decoration' to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='link-decoration' to="/About">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link className='link-decoration' to="/Project">
                            Projects
                        </Link>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default Header;