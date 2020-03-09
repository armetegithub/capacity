import React from "react";
import { Link } from "react-router-dom";
import FoundationsService from "../../service/FoundationsService";
export default class FoundationDetail extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = { foundation: null };
    this.services = new FoundationsService();
  }



  componentDidMount = () => this.oneFoundation();
  oneFoundation = () => {
    this.services
      .oneFoundation(this.props.match.params.id)
      .then(onefoundation => this.setState({ foundation: onefoundation }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.foundation);
    return (
      <div className="Foundation">
        {this.state.foundation ? (
          <div className="detail-view">
            <h1>{this.state.foundation.name}</h1>
            <img src={this.state.foundation.imageURL} />
        <p>{this.state.foundation.info}</p>
          </div>
        ) : (
          console.log("No hay na")
        )}
        {this.state.foundation && this.state.foundation.projects.map(project => (
            project.name
            


            
            
        ))}
      </div>
    );
  }
}


