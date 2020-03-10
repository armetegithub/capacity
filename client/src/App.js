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
import ProjectsService from "./service/ProjectsService";
import Projects from "./components/Projects/Projects";
import Foundations from "./components/Foundations/Foundations";
import FoundationsService from "./service/FoundationsService";
import SearchBar from "./components/Searchbar/SearchBar";
import ProjectDetail from "./components/Projects/ProjectDetail";
import FoundationDetail from "./components/Foundations/FoundationDetail";
import Navigator from "./components/navbar/Navigavtor";
import NewFoundation from "./components/Foundations/PostFoundation";
import NewProject from "./components/Projects/PostProject";
import UserDetail from "./components/User/UserDetail";

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends React.Component {

  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = {
      loggedInUser: null,
      projects: [],
      foundations: []
    };
    this.service = new AuthService();
    this.ProjectsService = new ProjectsService();
    this.FoundationsService = new FoundationsService();
    this.fetchUser();
    this.fetchProjects();
    this.fetchFoundations();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
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
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  }



  fetchOneUser = () => {

    return this.UserService.oneService().then(oneUser => {
      this.setState({
        user: oneUser
      })
    })
  }

  fetchProjects = () => {
    return this.ProjectsService.allProjects().then(allProjects => {
      this.setState({
        projects: allProjects
      });
    });
  };

  // fetchOneProject = () => {
  //   return this.ProjectService.oneProject().then(oneProject => {
  //     this.setState({
  //       project: oneProject
  //     });
  //   });
  // };

  fetchFoundations = () => {
    return this.FoundationsService.allFoundations().then(allFoundations => {
      this.setState({
        foundations: allFoundations
      });
    });
  };

  fetchOneFoundation = () => {
    return this.FoundationsService.oneFoundation().then(oneFoundation => {
      this.setState({
        foundation: oneFoundation
      });
    });
  };

  addFoundation = () => {
    return this.FoundationsService.addFoundation().then(addFoundation => {

      this.setState({
        foundations: addFoundation
      })
    })
  }

  addProject = () => {
    return this.ProjectsService.addProject().then(addProject => {
      this.setState({
        projects: addProject
      })
    })
  }

  render() {
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment>
          <div className="App">
            <header className="App-header">
              {/* <Navigator /> */}
              <Navbar
                className="navbar"
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
            </header>
            <Switch>
              {/* Muestra todos los proyectos */}
              <Route
                exact
                path="/projects"
                render={() => (
                  <Projects
                    fetchProjects={this.fetchProjects}
                    projects={this.state.projects}
                  />
                )}
              />k

              {/* Muestra todas las fundaciones */}
              <Route
                exact
                path="/foundations"
                render={() => (
                  <Foundations
                    fetchFoundations={this.fetchFoundations}
                    foundations={this.state.foundations}
                  />
                )}
              />
              <Route
                path="/projects/:id"
                render={props => <ProjectDetail {...props} loggedInUser={this.state.loggedInUser} />}
              />

              <Route
                path="/foundations/:id"
                render={props => <FoundationDetail {...props} />}
              />

              <Route path="/addFoundation"
              render={() => (
                <NewFoundation />
              )}></Route>

              <Route path="/addproject"
              render={() => (
                <NewProject />
              )}></Route>

              <Route path="/account/:id"
              render={() => (<UserDetail userInSession={this.state.loggedInUser} getUser={this.getUser}/> 
              )}></Route>
           
              
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
              <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
            </header>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Contents
                    fetchProjects={this.fetchProjects}
                    projects={this.state.projects}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                render={() => <Signup getUser={this.getUser} />}
              />
              <Route
                exact
                path="/login"
                render={props => <Login getUser={this.getUser} {...props} />}
              />
            </Switch>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
