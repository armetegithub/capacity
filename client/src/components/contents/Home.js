import React, { Component } from "react";
import ProjectItem from "../contents/ProjectItem";
import "./Project.scss";
import "typeface-roboto";
import Header from "../header/Header";
import SearchBar from "../Searchbar/SearchBar";
import Navigator from "../navbar/Navigavtor";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects().then(_ => console.log(this.props));
    this.props.fetchFoundations().then(_=> console.log(this.props));
  }


  render() {
    return (
      <div className="contents">
        <h3></h3>
        <div className="projects-search">
        <SearchBar                     
          filterProjects={(e)=>this.props.filterProjects(e)}
          />
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
