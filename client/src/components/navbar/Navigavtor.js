import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../service/AuthService";
import logo from "../navbar/capacity_logo.svg";





class Navigator extends Component {
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
        <nav className="nav-style">
          <ul>
            <li>
              <a onClick={this.handleLogout}>Logout</a>
            </li>
          </ul>

          <div className="header">
            <h2>Welcome {this.state.loggedInUser.username} - Ironhacker</h2>
          </div>
        </nav>
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

export default Navigator;
