import React from 'react';
import ProjectInfo from "./project.info";

const ProjectInfoGroup = ({projects}) => {
    const projectInfos = projects.map(project => <ProjectInfo project={project}/>);

    return (
        <div className="row no-gutters">
            {projectInfos}
        </div>
    );
};

export default ProjectInfoGroup;