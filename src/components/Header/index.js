import React from "react";
import Footer from "../Footer";
import  './style.css';

function Header (props) {
    let menuOpen =false;

    const addClass=()=>{
        menuOpen = !menuOpen;

        const menu = document.querySelector('.menu');
        const body = document.querySelector('body');
        const background = document.querySelector('.background');
        const footer = document.querySelector('.footer');

        if(menuOpen){
            menu.classList.add('menu-open');
            body.classList.add('hide-overflow');
            background.classList.add('darken-background');
            footer.classList.add('footer-open');
        } else {
            menu.classList.remove('menu-open');
            body.classList.remove('hide-overflow')
            background.classList.remove('darken-background');
            footer.classList.remove('footer-open');
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
                <br></br><br></br>
                <div><Footer/></div>        
            </div>
        </header>
        <div className="background">
            <div className="menu">{props.children}</div>
        </div>
    </>

    )
}

export default Header;