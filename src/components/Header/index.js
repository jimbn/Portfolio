import React from "react";
import  './style.css';

function Header () {

    return (
        
        <div className="header-style">
            <div><h1 className="title">Jim Bui Nguyen</h1></div>
            {props.children}
        </div>
    )
}

export default Header;