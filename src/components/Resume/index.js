import React from "react";
import "./style.css";

function Resume() {
  
  return(
    <section className="resume">

      <div className='resume-dl'>
        <h5>
          Download my <a href='./assets/Resume.pdf' download='Resume.pdf'>resume</a>
        </h5>
      </div>
      <div>
        <div className='resume-background'>
          <h3>Experience</h3>
          <ul className='experience'>
            <li>
              <h4>University of California, Berkeley, Coding Bootcamp - <span>Full Stack Developer Certification</span></h4>
              <p>June 2022 (Completed)</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="resume-background">
        <h3>Skills</h3>
        <ul className="resume-proficiencies">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Mobile Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  )
}

export default Resume;