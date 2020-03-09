import React, { Component } from "react";
import ProjectItem from "../contents/ProjectItem";
import "./Project.scss";
import "typeface-roboto";
import Header from "../header/Header";
import SearhcBar from "../Searchbar/SearchBar";
import Navigator from "../navbar/Navigavtor";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects().then(_ => console.log(this.props));
  }

  handleSearch = search => {
    console.log(search);
  };

  render() {
    return (
      <div className="contents">
        <div className="projects-search">
          <h3>PROYECTOS</h3>

          <SearhcBar handleSearch={this.handleSearch} />
        </div>

        <div className="contenedor">
          {this.props.projects.map(project => (
            <ProjectItem project={project} key={project._id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
