import React, { Component } from "react";
import { Link } from "react-router-dom";
// import './ProjectItem.scss';


class UnsuscribeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: "",
      id: "",
      succeed: "",
      error: false,
      allprojects: []
    };
  }

//   componentDidMount = () => this.oneProject();
//   oneProject = () => {
//     this.services
//       .oneProject(this.props.match.params.id)
//       .then(oneproject => this.setState({ project: oneproject }))
//       .catch(err => console.log(err));
//   };

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.unfollowproject()
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  




  render() {
  return (
    <div>
      <div className="despliegue">
        <p>{this.props.project.project_type}</p>
        <Link to={`/projects/${this.props.project._id}`}><h1>{this.props.project.name}</h1></Link>
        <Link to={`/projects/${this.props.project._id}`}><img src={this.props.project.imageURL} width="300px" /></Link>
        <Link to={`/projects/${this.props.project._id}`}><p>{this.props.project.info}</p></Link>
        <form onSubmit={e => this.handleFormSubmit(e)}>
        <input className="button" type="submit" value="Dejar de Seguir" />
        </form>
       

      </div>
    </div>
  );
}
}

export default UnsuscribeProject;
