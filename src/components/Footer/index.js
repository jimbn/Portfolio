import React from "react";
import "./style.css";

const currentYear = new Date().getFullYear();


function Footer () {


  return(
    <footer className="footer" >
      <p>Jim Bui Nguyen &copy; {currentYear} </p>
    </footer>
  )
}

export default Footer;