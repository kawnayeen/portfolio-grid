import React from 'react';

const ProjectInfo = ({project, onSelect}) => {
    return (
        <div className="col-md-3" onClick={() => onSelect(project)}>
            <img src={project.getImageUrl()} alt="" className="img-fluid"/>
        </div>
    );
};

export default ProjectInfo;