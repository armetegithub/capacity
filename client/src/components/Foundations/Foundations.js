import React, { Component } from "react";
import FoundationItem from "./FoundationItem";
// import "./Project.scss";
import "typeface-roboto";
import Header from "../header/Header";
import SearhcBar from "../Searchbar/SearchBar";
import Navigator from "../navbar/Navigavtor";

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
