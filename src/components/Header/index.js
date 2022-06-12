import React from "react";
import  './style.css';

function Header (props) {
    let menuOpen =false;

    const addClass=()=>{
        menuOpen = !menuOpen;

        const menu = document.querySelector('.menu');
        const body = document.querySelector('body');
        const background = document.querySelector('.background');

        if(menuOpen){
            menu.classList.add('menu-open');
            body.classList.add('hide-overflow');
            background.classList.add('darken-background');
        } else {
            menu.classList.remove('menu-open');
            body.classList.remove('hide-overflow')
            background.classList.remove('darken-background');

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
        <div className="background">
            <div className="menu">{props.children}</div>
        </div>
    </>

    )
}

export default Header;