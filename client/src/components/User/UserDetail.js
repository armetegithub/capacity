import React from "react";
import { Link } from "react-router-dom";
import UsersService from "../../service/UsersService";
import AuthService from "../../service/AuthService";
import FoundationsItem from "../Foundations/FoundationItem";
import portadaprofile from '../contents/start_up.svg';
import  './UserDetail.scss';



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
    console.log(this.props.userInSession);
    return (
      <div className="user">         
        {this.props.userInSession.username ? (
            
          <div className="user-detail-view">
            <h1>Hola {this.props.userInSession.username}</h1>

            <img src={portadaprofile} alt="portadaprofile" width="600px" class="portada" />
            <h2>Estos son los proyectos a los que estás suscrito</h2>
  

          
            {this.props.userInSession && this.props.userInSession.foundations_created.map(foundation => (

          
            
            <FoundationsItem foundations={foundation} key={foundation._id} />
                  
        ))}
                
                
         
    
          </div>
        ) : (
        //   console.log("No hay na");
          console.log(this.state)
        )}
      </div>
    
    );
  }
}
