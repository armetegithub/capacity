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

 
  search = value => {
    const originalAllprojects = [...this.state.originalAllprojects]
    let newList = []
    console.log(value)
    newList = originalAllprojects.filter(item => {
      // debugger
        const lc = item.toLowerCase();
        const lt = item.toLowerCase();
        const filter = value.toLowerCase();
        // const lc = item.colectivo
        console.log(lc)
        // const filter = value;
        return (lc.includes(filter) || lt.includes(filter))
      })

    console.log(newList) 
      this.setState({ allprojects: newList })
    }


      handleChange = e => {
        const { name, value } = e.target;
        this.search(value)
        this.setState({ [name]: value });
      };
   

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

  


  

  render(){

    const filterAllprojects = this.state.allprojects.filter((projects) => projects.id.includes(this.props.userInSession._id) === false)

    const {handleSearch} = this.props
    const {search} = this.state
    this.handleChange = this.handleChange.bind(this);
    
    return(

        <div className="search-container">
          <div className="search-box">

            <input onChange={this.handleChange} 
            value={search}
            className="search-input"
            name="search"
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