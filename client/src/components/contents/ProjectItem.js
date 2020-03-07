import React from "react";
import { Link } from "react-router-dom";
import './ProjectItem.scss';

function ProjectItem(props) {
  return (
    <div>
      <div className="despliegue">
      <p>{props.project.project_type}</p>
        <h1>{props.project.name}</h1>
        <img src={props.project.imageURL} width="300px" />
        <p>{props.project.info}</p>
 
        {/* {props.project.foundation.name} */}
        <button>Más Información</button>
      </div>
    </div>
  );
}

export default ProjectItem;
