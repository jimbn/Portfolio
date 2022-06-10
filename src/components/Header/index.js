import React from "react";
import  './style.css';

function Header (props) {
    let menuOpen =false;

    const addClass=()=>{
        menuOpen = !menuOpen;

        const menu = document.querySelector('.menu');
        const body = document.querySelector('body');

        if(menuOpen){
            menu.classList.add('menu-open');
            body.classList.add('hide-overflow')
        } else {
            menu.classList.remove('menu-open');
            body.classList.remove('hide-overflow')

        }
    } 

 

    return (
    <>    
        <header className="header-style">
            <div>
                <div className="diamond-border">
                </div>
                <div className="menu-button diamond " onClick={ addClass}>
                </div>          
            </div>
        </header>
        <div className="menu">{props.children}</div>

    </>

    )
}

export default Header;