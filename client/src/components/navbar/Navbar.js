import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../service/AuthService";
import logo from "../navbar/capacity_logo.svg";




class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
    
        <div className="navbar-div">
          <nav className="nav-style">
            <Link to="#">
              <img src={logo} alt="logo" width="400px" class="logo" />
            </Link>
            <ul>
              <div className="right-nav">
              <li>
                  <Link to={`/account/user/${this.state.loggedInUser._id}`}>Perfil</Link>
                </li>
                <li>
                  <Link to="/foundations">Fundaciones</Link>
                </li>
                <li>
                  <Link to="/projects">Proyectos</Link>
                </li>
                <li>
                  <a onClick={this.handleLogout}>Logout</a>
                </li>
              </div>
              <span>Hola, {this.state.loggedInUser.username}</span>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="navbar-div">
          <nav className="nav-style">
            <Link to="#">
              <img src={logo} alt="logo" width="400px" class="logo" />
            </Link>
            <ul>
              <div className="right-nav">
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
