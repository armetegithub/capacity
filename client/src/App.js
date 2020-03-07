import React, { Component } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";

// import ProjectList from './components/projects/ProjectList';
import Navbar from "./components/navbar/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./service/AuthService";
import Contents from "./components/contents/Contents";
import ProjectsService from './service/ProjectsService';

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = { 
      loggedInUser: null,
      projects : []
     };
    this.service = new AuthService();
    this.ProjectsService = new ProjectsService();
    this.fetchUser()
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response,
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }

  fetchProjects = () => {
    return this.ProjectsService.allProjects()
    .then(allProjects => {
      this.setState({
        projects: allProjects
      })
    })
  }

  render() {
    const { projects } = this.state
    console.log(projects)
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment>

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
              <Switch>
                <Route exact path="/" render={() => <Contents fetchProjects={this.fetchProjects} projects={this.state.projects}/>} />
                {/* <Route exact path="projects" render={() => <Projects fetchProjects={this.fetchProjects} projects={this.state.projects}/>}/> */}

                {/* <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} /> */}
              </Switch>
          </div>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
              <Switch>
                <Route exact path="/" render={() => <Contents fetchProjects={this.fetchProjects} projects={this.state.projects}/>} />
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
              </Switch>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
