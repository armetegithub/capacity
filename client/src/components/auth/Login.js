import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../service/AuthService';
import "./Login.scss"


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response)
        this.props.history.push('/projects')
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log("Dentro de login")
    return (
    <div className="container-form">
      <h3>Welcome to Capacity</h3>

      <form className="form-style-9" onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset>
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
        </fieldset>

        <input type="submit" value="Login" />
      </form>

      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>)
  }
}

export default Login;