import React from "react";

import About from "../About";
import Project from "../Project";
import Resume from "../Resume";

function Main ({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About':
        return <About/>
      case 'Project':
        return <Project/>
      case 'Resume':
        return <Resume/>
      default: 
      return <About/>
    }
  }

  return(
    <>
      <h1 className="highlight" >{currentPage.name}</h1>
      <div className="main">
        {renderPage()}
      </div>
    </>
  )
}

export default Main;