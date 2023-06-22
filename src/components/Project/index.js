import React, { useState } from "react";
import ProjectFocus from "../ProjectFocus";
import ProjectList from "../ProjectList";
import projectArray from "../../assets/projectList/projectArray";

function Project () {
  
 const [ focusProject, setFocusProject ] = useState(projectArray[0]);

// to have animate out need to set useState being boolean.
// set switch component and have onclick, change this.state == true
  return(
   <>
        <ProjectFocus 
          focusProject = {focusProject}
        />

      <ProjectList 
        focusProject = {focusProject}
        projectArray = {projectArray}
        setFocusProject = {setFocusProject}
      />
   </>
  )
}

export default Project;