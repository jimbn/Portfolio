import React from "react";
import "./style.css"

function ProjectList (props) {
  const {projectArray = [], setFocusProject} = props;
  
  function onClickEvent (Project) {
    setFocusProject(Project)
  }

  return(
    <div style={{ display: 'flex', justifyContent:'space-between', maxWidth:"75%"}}>
      {projectArray.map((Project) => (
        <div className="project-item" 
          onClick={() => onClickEvent(Project)}>
          <img  className="project-item-img" src={Project.image} />
          <div className="project-item-txt" style={{ }}>
            <h2>{Project.name}</h2>
            <h4>{Project.language}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectList;
