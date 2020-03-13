import React, { Component } from 'react';
// import ProjectItem from './ProjectItem';
// import './Content.scss';
import 'typeface-roboto';
import portada from '../contents/portada1.svg';


class Header extends Component {
    constructor(props){
      super(props)
    }
  
  
    render() {
      return (<div className="header">
  
        <div className="cabecera-portada">
          <h1>Bienvenidos a Capacity</h1>
          <h2>¿Estás listo para poner al máximo tus capacidades?</h2>
          <img src={portada} alt="portada" width="600px" class="portada" />
        </div>
        </div>
  
      
      )}
  }
  
  export default Header;