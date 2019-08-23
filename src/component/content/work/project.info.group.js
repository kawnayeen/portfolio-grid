import React from 'react';
import ProjectInfo from "./project.info";

const ProjectInfoGroup = ({projects, onSelect}) => {
    const projectInfos = projects.map(project => <ProjectInfo project={project} onSelect={onSelect}/>);

    return (
        <div className="row no-gutters">
            {projectInfos}
        </div>
    );
};

export default ProjectInfoGroup;