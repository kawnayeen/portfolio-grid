import React from 'react';

const ProjectInfo = ({project}) => {
    return (
        <div className="col-md-3">
            <a href={project.getDetailsUrl()} data-toggle="lightbox">
                <img src={project.getImageUrl()} alt="" className="img-fluid"/>
            </a>
        </div>
    );
};

export default ProjectInfo;