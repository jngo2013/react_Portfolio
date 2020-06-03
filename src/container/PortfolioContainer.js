import React, { Component } from 'react';
import Portfolio from '../component/Portfolio';
import projects from '../project.json';
import './portfolioContainer.css'
class PortfolioContainer extends Component {
  // keep track of project data
  state = {
    projects: projects,
  }
  render() {
 
    const projectsArr = this.state.projects;
    const newProjectsArr = projectsArr.map((project) => 
      <Portfolio 
        id={project.id}
        name={project.name}
        image={project.image}
        description={project.description}
        tryLink={project.tryLink}
        repository={project.repository}
        note={project.note}
      />
    );
    return(
        <div className='flex-container'>
          {newProjectsArr}
        </div>
    );
  }
}
export default PortfolioContainer;