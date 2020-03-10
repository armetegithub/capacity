import React from "react";
import { Link } from "react-router-dom";
import FoundationsService from "../../service/FoundationsService";
import ProjectItem from "../contents/ProjectItem";
import './FoundationDetail.scss';
export default class FoundationDetail extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = { foundation: null };
    this.services = new FoundationsService();
  }



  componentDidMount = () => this.oneFoundation();
  oneFoundation = () => {
    this.services
      .oneFoundation(this.props.match.params.id)
      .then(onefoundation => this.setState({ foundation: onefoundation }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.foundation);
    return (
      <div className="foundation">
        {this.state.foundation ? (
          <div className="detail-view">
            <h1>{this.state.foundation.name}</h1>
            <img src={this.state.foundation.imageURL} />
            <p>{this.state.foundation.description}</p>
          </div>
        ) : (
          console.log("No hay na")
        )}


        <div className="despliegue-proyect">
        {this.state.foundation && this.state.foundation.projects.map(project => (
            
            <ProjectItem project={project} key={project._id} />
                  
        ))}
        </div>
      </div>
    );
  }
}


