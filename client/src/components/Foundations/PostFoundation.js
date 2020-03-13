import React from "react";
import './PostFoundation.scss'
import FoundationsService from "../../service/FoundationsService";

export default class NewFoundation extends React.Component {
  foundationsService = new FoundationsService();

  state = {
     name: "", info: "", project_type: "", comunidad: "" 
  };

  componentDidMount() {}
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
   
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.foundationsService.addFoundation(this.state);
  };

  cargar_provincias() {
    let comunidades = ["Andalucía", "Aragón", "Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", "Ceuta", "Comunidad Valenciana", "Comunidad de Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja", "Melilla", "Navarra", "País Vasco", "Asturias", "Murcia"];
  
      // Ordena el Array Alfabeticamente, es muy facil ;)):
        comunidades.sort();
          return comunidades.map(comunidad => <option>{comunidad}</option>)
      //addOptions("provincia", comunidades);
     }


  render() {
    return (
      <div className="NewFoundation">
        <h1>New Foundation Page</h1>

        <form className="form-style-9" onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Nombre de la fundación:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Describe tu fundación:</label>
            <textarea 
              cols="40" rows="5"
              type="text"
              name="description"
              value={this.state.description}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Email de la fundación:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <label>Elige tu comunidad autónoma: </label>

          <fieldset>
            <select
              name="comunidad"
              value={this.state.comunidad}
              onChange={e => this.handleChange(e)}
            >
              {this.cargar_provincias()}
            </select>
          </fieldset>
          <input type="submit" value="Crear nueva fundación" />
        </form>
      </div>
    );
  }
}
