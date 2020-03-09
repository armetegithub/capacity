import React from "react";
import { Link } from "react-router-dom";
// import './ProjectItem.scss';

function FoundationtItem(props) {
  return (
    <div>
      <div className="despliegue">
       
      <Link to={`/foundations/${props.foundation._id}`}><h1>{props.foundation.name}</h1></Link>
      <Link to={`/foundations/${props.foundation._id}`}><img src={props.foundation.imageURL} width="300px" /></Link>
      <p>{props.foundation.projects}</p>
       
        {/* {props.project.foundation.name} */}
        <button>Más Información</button>
      </div>
    </div>
  );
}

export default FoundationtItem;