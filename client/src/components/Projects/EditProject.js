import React from "react";
import startup from '../contents/startup.svg';
import ProjectsService from "../../service/ProjectsService";

export default class NewProject extends React.Component {
  projectsService = new ProjectsService();

  state = {
     name: "", info: ""
  };

  componentDidMount() {}
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
   
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.projectsService.editProject(this.state);
  };

  render() {
    return (
      <div className="editProject">
        <h1>New Project Page</h1>
        <img src={startup} alt="startup_project" className="portada"></img>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Edita el nombre de proyecto:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Edita la información de tu proyecto:</label>
            <textarea 
              cols="40" rows="5"
              type="text"
              name="info"
              value={this.state.description}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <input type="submit" value="Crear nuevo proyecto" />
        </form>
      </div>
    );
  }
}
