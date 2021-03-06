import React from "react";

import './style.css'
import gitPic from './whiteGit.png';
import linkPic from './link.png';
import gmailPic from './gmail.jpg';

function Footer () {
    return(
    <div className="footer">
    <div className="contact">
        <ul > 
            <li>
                <a href="https://github.com/jimbn" target="blank">
                    <img src={gitPic} alt="GitHub Icon" /> 
                </a>
            </li>
            <li>
                <a href="mailto:nguyenb.jim@gmail.com">
                    <img src={gmailPic}alt="Gmail Icon" /> 
                </a>
            </li>           
            <li>
                <a href="https://www.linkedin.com/in/jim-nguyen-342798121?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BsUgtgtIT5axyqFwuc12Wg%3D%3D" target="blank">
                    <img src={linkPic} alt="Linkedin Icon" /> 
                </a>
            </li>
        </ul>
    </div>

    </div>
    );
};

export default Footer;