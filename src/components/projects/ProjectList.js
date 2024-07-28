import React from 'react';
import ProjectItem from '../projects/ProjectItem';
import './projectList.css';

function ProjectList() {
    return (
        <div>
            <div className="project-list-container">
                <ProjectItem />
            </div>
        </div>
    );
}

export default ProjectList;