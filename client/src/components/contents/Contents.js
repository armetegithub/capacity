import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import './Content.scss';
import 'typeface-roboto';
import portada from '../contents/portada1.svg';
import Header from '../header/Header';



//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
class Contents extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchProjects()
    .then(_ => console.log(this.props))
  }

  render() {
    return (<div className="contents">

      <Header />

      <h3>ÚLTIMOS PROYECTOS</h3>
       
        <div className= "contenedor">
    
          
        {this.props.projects.map(project=>(
       
            <ProjectItem project={project} key={project._id}/>
          
        ))}
        </div>
        
        </div>
       
    );
  }
}

export default Contents;