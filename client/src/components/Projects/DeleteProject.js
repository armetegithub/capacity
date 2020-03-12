import React from "react";

import ProjectsService from "../../service/ProjectsService";

export default class DeleteProject extends React.Component {
  projectsService = new ProjectsService();

  state = {
     projects: []
  };

  componentDidMount() {}
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
   
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.projetsService.deleteProject(this.state);
  };

  

  render() {
       return(
    <form onSubmit={e => this.handleFormSubmit(e)}>
    <input className="button" type="submit" value="Eliminar Proyecto" />
    </form>
   
       )}
}