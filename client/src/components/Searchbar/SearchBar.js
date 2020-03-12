import React, { Component } from "react";
import './SearchBar.scss'
class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render(){
 
    return(
        <div className="search-container">
          <div className="search-box">
            <input 
            
            onChange={(e)=>this.props.filterProjects(e)} 
            className="search-input"
            type="text"/>
            <span></span>
            </div>
        </div>
    )
  }
}
export default SearchBar;