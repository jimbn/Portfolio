import React from "react";

import './style.css';


function Resume() {
  return (
    <section className="resume">
      <div className='resume-dl'>
        <h5>
          Download my <a href='./assets/Resume_JimBuiNguyen.pdf' Download='Resume_JimBuiNguyen.pdf'>resume</a>
        </h5>
      </div>
      <div>
        <div className='resume-background'>
          <h3>Experience</h3>
          <ul className='experience'>
            <li>
              <h4> University of California, Berkeley, Coding Bootcamp - <span>Full Stack Developer Certification</span></h4>
              <p> December 2021 - June 2022 (<bold>Completed</bold>)</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="resume-flex">
        <div className="resume-background">
          <h3>Front-end Proficiencies</h3>
          <ul className="resume-proficiencies">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="resume-background">
          <h3>Back-end Proficiencies</h3>
          <ul className="resume-proficiencies">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


export default Resume;