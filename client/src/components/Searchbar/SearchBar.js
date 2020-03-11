import React, { Component } from "react";
import projects from "../Projects/Projects";
import './SearchBar.scss'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {search: ''}
    // filtered: [];
    
  }


  componentDidMount(){

    this.setState({
        filtered: this.props.projects
    })
  }

  componentWillReceiveProps(nextProps){
      this.setState({
          filtered: nextProps.projects
      })
  }

  handleChange = (e) => {

    this.setState({
        search:e.target.value
    });

    // let currentList = [];

    // let newList = [];

    // if(e.target.value !== ""){
    //     currentList = this.props.projects;
    

    // newList = currentList.filter(item => {

    //     const lc = item.toLowerCase();

    //     const filter = e.target.value.toLowerCase();

    //     return lc.inludes();


    // });

    // }else{

    //     newList = this.porps.projects
    // }

    // this.setState({
    //     filtered:newList
    // })

  }


  

  render(){

    const {handleSearch} = this.props
    const {search} = this.state
    this.handleChange = this.handleChange.bind(this);
    
    return(

        <div className="search-container">
          <div className="search-box">

            <input onChange={this.handleChange} 
            value={search}
            className="search-input"
            type="text"/>
            <span></span>
            {/* <button className="searchButton" onClick={() =>  handleSearch(search)}>Search</button> */}
            </div>

        </div>

    )
  }

}

// Search.propTypes = {

//     handleChange: propTypes.func.isRequired
// }

export default SearchBar;