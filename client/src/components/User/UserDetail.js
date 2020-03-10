import React from "react";
import { Link } from "react-router-dom";
import UsersService from "../../service/UsersService";
import AuthService from "../../service/AuthService";

export default class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

//   componentDidMount(props) {
//     this.setState({ ...this.state, loggedInUser: props["userInSession"] });
//   }

  render() {
    console.log(this.user);
    return (
      <div className="user">         
        {this.props.userInSession.username ? (
          <div className="user-detail-view">
            <h1>Hola {this.props.userInSession.username}</h1>
            <h2>Estos son los proyctos a los que estás suscrito</h2>
          </div>
        ) : (
          console.log("No hay na")
        )}
      </div>
    );
  }
}
