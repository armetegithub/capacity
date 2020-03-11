import React, { Component } from "react";
import FoundationItem from "./FoundationItem";
import {Link} from 'react-router-dom';
import './Foundation.scss';
import "typeface-roboto";
import Header from "../header/Header";
import SearhcBar from "../Searchbar/SearchBar";
import Navigator from "../navbar/Navigavtor";
import './FoundationDetail.scss';

class Foundations extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFoundations().then(_ => console.log(this.props));
  }

  handleSearch = search => {
    console.log(search);
  };

  render() {
    return (
      <div className="contents">
      
        <h3>Foundations</h3>
        <SearhcBar  handleSearch={this.handleSearch} />
        <Link className="button" to="/addFoundation">Crear fundación</Link>
        
        <div className="contenedor">
          {this.props.foundations.map(foundation => (
            <FoundationItem foundation={foundation} key={foundation._id} />
          ))}
        </div>
      </div>
 
    );
  }
}

export default Foundations;
