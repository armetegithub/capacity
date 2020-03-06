import React from "react";
import { Link } from "react-router-dom";

function ProjectItem(props) {
  return (
    <div>
      <div className="depliegue">
        <h1>{props.project.name}</h1>
        <h3>{props.project.info}</h3>
        <img src={props.project.imageURL} />
        <p>{props.project.project_type}</p>
        {/* {props.project.foundation.name} */}
      </div>
    </div>
  );
}

export default ProjectItem;
