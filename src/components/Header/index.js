import React from "react";
import { Link } from "react-router-dom";
import  './style.css';

function Header () {

    return (
        
        <div className="header-style">
            <div><h1 className="title">Jim Bui Nguyen</h1></div>
            <div className="header-nav">
                <ul>
                    <li>
                        <Link to="/">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to="/Portfolio" >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to='/Resume'>
                            Resume
                        </Link>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default Header;