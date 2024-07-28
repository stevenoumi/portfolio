import React from 'react';
import ProjectList from '../components/projects/ProjectList' ;
import Header from '../components/header/Header';

function ProjectDetails() {

    return (
        <div className="project-details">
            <Header />
            <ProjectList />
        </div>
    );
}

export default ProjectDetails;
