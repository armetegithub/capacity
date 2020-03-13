import React from "react";
import { Link } from "react-router-dom";
import ProjectsService from "../../service/ProjectsService";
import "./ProjectDetail.scss";

export default class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: null };
    this.services = new ProjectsService();
  }
 subscribeProject = () =>{
  this.services.subscribeProject(this.state.project._id, 
    {newSuscriber: this.props.loggedInUser._id })
  .then(updateProject => this.setState({specificProject: updateProject}))
  .catch(err => console.log(err));
 }
  
  componentDidMount = () => {
    this.oneProject()
  };
  oneProject = () => {
    this.services
      .oneProject(this.props.match.params.id)
      .then(oneproject => {
          this.setState({ project: oneproject })
        }, () => console.log(this.getOwnerOfProject()) )
      .catch(err => console.log(err));
  };
  getOwnerOfProject = () => {
    let foundationOfThisProject = this.state.project.foundation
    let foundationsCreatedByCurrentUser = this.props.loggedInUser.foundations_created;
    console.log(foundationsCreatedByCurrentUser.some(el => el._id == foundationOfThisProject))
    return foundationsCreatedByCurrentUser.some(el => el._id == foundationOfThisProject)
  }

  deleteProject = () => {
    let userId = this.props.loggedInUser._id;
    let projectId = this.state.project._id
    this.services.deleteProject(projectId, userId)
    .then(_ => this.props.history.push('/projects'))
  }  
  render() {
    return (
      <div className="Project">
        {this.state.project ? (
          <div className="detail-view">
            <h1>{this.state.project.name}</h1>
            <img src={this.state.project.imageURL} />
            <p>{this.state.project.info}</p>
            {this.getOwnerOfProject() && <Link className="cosa" to={`/editproject/${this.state.project._id}`}>Editar</Link>}
            <button onClick={()=>this.subscribeProject()}>Inscribirse</button>
            {this.getOwnerOfProject() && <button onClick={()=>this.deleteProject()}>Eliminar proyecto</button>}
          </div>
        ) : (
          console.log("No hay na")
        )}
      </div>
    );
  }
}


