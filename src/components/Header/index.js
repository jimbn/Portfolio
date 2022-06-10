import React from "react";
import  './style.css';

function Header (props) {
    let menuOpen =false;

    const addClass=()=>{
        menuOpen = !menuOpen;

        const menu = document.querySelector('.menu');

        if(menuOpen){
            menu.classList.add('menu-open')
        } else {
            menu.classList.remove('menu-open')
        }
    } 

 

    return (
    <>    
        <header className="header-style">
            <div className="menu">{props.children}</div>
            <div>
                <div className="diamond-border">
                </div>
                <div className="menu-button diamond " onClick={ addClass}>
                </div>          
            </div>
        </header>
    </>

    )
}

export default Header;