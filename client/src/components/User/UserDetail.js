import React from "react";
import { Link } from "react-router-dom";
import UsersService from "../../service/UsersService";
import AuthService from "../../service/AuthService";
import FoundationsItem from "../Foundations/FoundationItem";
import portadaprofile from "../contents/start_up.svg";
import "./UserDetail.scss";
import axios from 'axios'
import ProjectsItem from "../../components/contents/ProjectItem";
import UnsuscribeProject from "../../components/Projects/UnsuscribeProject"

export default class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, subscribers:[] };
    this.service = new AuthService();
    
  }

    componentDidMount() {
      this.fetchAllInfo()
    }

    fetchAllInfo (){
    axios.get(`http://localhost:3001/api/projects/projects/${this.props.userInSession._id}`)
      .then(responseFromApi => {
        this.setState({
         
          subscribers: responseFromApi.data

          
        })
      })
    }


    

    unfollowproject(projectID, SUBSCRIPTOR){
      axios.put(`http://localhost:3001/api/projects/deletesubscriber/${projectID}` ,{SUBSCRIPTOR})
        .then(_=> {
          this.fetchAllInfo()
        })
        .catch(_=> {
          this.setState({
            error: true
          });
        });
    }
  
  
  
  render() {
    console.log(this.props.userInSession);
    console.log(this.state.subscribers);


    return (
      <div className="user">
        {this.props.userInSession.username ? (
          <div className="user-detail-view">
            <h1>Hola {this.props.userInSession.username}</h1>
            <h1>{this.state.subscribers.name}</h1>

            <img
              src={portadaprofile}
              alt="portadaprofile"
              // width="600px"
              class="portada"
            />
            <h2>Estas son tus fundaciones</h2>
            <div className="contenedor">
            {this.props.userInSession &&
              this.props.userInSession.foundations_created.map(foundation => (
                <FoundationsItem foundation={foundation} key={foundation._id} />
              ))}
              </div>
            
            <h2>Estos son los proyectos a los que estas suscrito</h2>
       
            {this.state.subscribers.map(project => (
               <div className="contenedor">
                <UnsuscribeProject unfollowproject={()=>this.unfollowproject(project._id, this.props.userInSession._id)} project={project} key={project._id}/>
                
                {/* <button onClick={() => 
              
                }</button> */}
                
            </div>
                
                
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
