import React from "react";
import { Link } from "react-router-dom";
import ProjectsService from "../../service/ProjectsService";
export default class ProjectDetail extends React.Component {
  // state = {
  //   project: {};
  //   this.services = new ProjectsService()

  // };

  constructor(props) {
    super(props);
    this.state = { project: null };
    this.services = new ProjectsService();
  }

 

  componentDidMount = () => this.oneProject();
  oneProject = () => {
    this.services
      .oneProject(this.props.match.params.id)
      .then(oneproject => this.setState({ project: oneproject }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.project);
    return (
      <div className="Project">
        {this.state.project ? (
          <div className="detail-view">
            <h1>{this.state.project.name}</h1>
            <img src={this.state.project.imageURL} />
        <p>{this.state.project.info}</p>
          </div>
        ) : (
          console.log("No hay na")
        )}
      </div>
    );
  }
}
