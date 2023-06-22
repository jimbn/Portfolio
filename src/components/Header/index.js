import React from "react";

import NavHam from "../NavHam";

import './style.css';

function Header ({pages, setCurrentPage}) {

  

  return(
    <header className="header">
      <div className="nav" >
        <NavHam 
          pages={pages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  )  
}

export default Header;