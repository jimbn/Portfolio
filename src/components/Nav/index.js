import React from "react";
import "../Header/style.css";

function Nav (props) {
  const {
    pages = [],
    setCurrentPage,
    isOpen,
    clickEvent
  } = props;

  return (
    <nav className={ `menu ${!isOpen ? '' : 'menu-open'}`} onClick={clickEvent}>
      <ul className ="menu-ul">
        {pages.map((Page) => (
          <li className="menu-li" key={Page.name}>
            /<span 
            onClick={() => setCurrentPage(Page)}
            style={{cursor:"pointer"}}
            >
              {Page.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Nav;