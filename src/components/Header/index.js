import React from "react";
import  './style.css';

function Header (props) {

    return (
        
        <header className="header-style">
            <div><h1 className="title">Jim Bui Nguyen</h1></div>
            {props.children}
        </header>
    )
}

export default Header;