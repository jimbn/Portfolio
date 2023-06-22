import React from "react";
import "./style.css";
import myPic from "../../assets/images/profile-pic/myPic.jpg"
import email from "../../assets/images/icon/gmail.png";
import gitHub from "../../assets/images/icon/github.png";
import linkedIn from "../../assets/images/icon/linkedin.png";


function About () {
  return(
    <div className='about'>
      <div>
        <img className='about-img' src ={myPic}/>      
        <div className='about-icon'>
          <a href="https://github.com/jimbn" target="blank">
            <img className='about-icon-img' src={gitHub} alt="GitHub Icon"  target='_blank'/> 
          </a>
          <a href="mailto:nguyenb.jim@gmail.com">
            <img className='about-icon-img' src={email}alt="Gmail Icon" /> 
          </a>
          <a href="https://www.linkedin.com/in/jim-nguyen-342798121?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BsUgtgtIT5axyqFwuc12Wg%3D%3D" target="blank">
            <img className='about-icon-img' src={linkedIn} alt="Linkedin Icon"  target='_blank'/> 
          </a>
        </div>
      </div>
      <div className="about-text">
        <p>
          I'm a driven full stack developer focusing on MERN stack. Recently completed and earned a certificate
          in Full Stack Web Development from University of California, Berkeley coding bootcamp. With my experience,
          I enjoy learning and apply new concepts and knowledge to create and improve on various web
          applications that implements CRUD.
        </p>
        <br></br>
        <p>
          As a backstory, I graduated from University of California, Irvine with a bachelor degree in
          Biological Science. I have previously work in retail, food services, and commercial realestate. 
          With my past experiences, it built my problem solving skills and being able to work independently
          and in a team environment. 
        </p>
        <br></br>
        <p>
          I'm a driven full stack developer focusing on MERN stack. Recently completed and earned a certificate
          in Full Stack Web Development from University of California, Berkeley coding bootcamp. With my experience,
          I enjoy learning and apply new concepts and knowledge to create and improve on various web
          applications that implements CRUD.
        </p>
        <br></br>
        <p>
          As a backstory, I graduated from University of California, Irvine with a bachelor degree in
          Biological Science. I have previously work in retail, food services, and commercial realestate. 
          With my past experiences, it built my problem solving skills and being able to work independently
          and in a team environment. 
        </p>
      </div>
    </div>
  )
}

export default About;