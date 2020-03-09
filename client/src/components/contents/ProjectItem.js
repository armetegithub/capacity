import React from "react";
import { Link } from "react-router-dom";
import './ProjectItem.scss';

function ProjectItem(props) {
  return (
    <div>
      <div className="despliegue">
        <p>{props.project.project_type}</p>
        <Link to={`/projects/${props.project._id}`}><h1>{props.project.name}</h1></Link>
        <Link to={`/projects/${props.project._id}`}><img src={props.project.imageURL} width="300px" /></Link>
        <Link to={`/projects/${props.project._id}`}><p>{props.project.info}</p></Link>

 
        {/* {props.project.foundation.name} */}
        <button>Más Información</button>
      </div>
    </div>
  );
}

export default ProjectItem;
