import React from "react";
import startup from '../contents/startup.svg';
import ProjectsService from "../../service/ProjectsService";
import './PostProject.scss';


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
    this.projectsService.addProject(this.state);
  };



  render() {
    return (
     
      <div className="titulo">
        <h1>
          Crear Nuevo Proyecto
        </h1>
      <div className="NewProject">
        
        <img src={startup} alt="startup_project" className="portada"></img>

        <form className="form-style-9" onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Nombre de la proyecto:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Describe tu proyecto:</label>
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
      </div>
    );
  }
}
