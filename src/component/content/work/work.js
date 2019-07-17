import React from 'react';
import Project from "../../../model/project";
import ProjectInfoGroup from "./project.info.group";

const Work = () => {
    const detailsBaseUrl = 'https://picsum.photos/1200/768.jpg?image=';
    const imageBaseUrl = 'https://picsum.photos/600.jpg?image=';

    const projects = [
        new Project(`${detailsBaseUrl}255`, `${imageBaseUrl}255`),
        new Project(`${detailsBaseUrl}256`, `${imageBaseUrl}256`),
        new Project(`${detailsBaseUrl}257`, `${imageBaseUrl}257`),
        new Project(`${detailsBaseUrl}258`, `${imageBaseUrl}258`)
    ];

    const getProjectInfos = () => {
        let segment = [];
        for (let i = 0; i < projects.length; i = i + 4) {
            segment.push(projects.slice(i, i + 4));
        }
        return segment.map(seg => <ProjectInfoGroup projects={seg}/>);
    };

    return (
        <div id="work" className="collapse show">
            <div className="card card-block card-warning text-white py-5">
                <h2>My Portfolio</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, blanditiis!</p>
            </div>
            <div className="card card-block py-5">
                <h3>What Have I Built?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nobis cum quidem perferendis
                    repellendus at.</p>
                {/*<ProjectInfoGroup projects={projects}/>*/}
                {/*<div className="row no-gutters">*/}
                {/*    <div className="col-md-3">*/}
                {/*        <a href="https://picsum.photos/1200/768.jpg?image=259" data-toggle="lightbox">*/}
                {/*            <img src="https://picsum.photos/600.jpg?image=259" alt="" className="img-fluid"/>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <div className="col-md-3">*/}
                {/*        <a href="https://picsum.photos/1200/768.jpg?image=260" data-toggle="lightbox">*/}
                {/*            <img src="https://picsum.photos/600.jpg?image=260" alt="" className="img-fluid"/>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <div className="col-md-3">*/}
                {/*        <a href="https://picsum.photos/1200/768.jpg?image=261" data-toggle="lightbox">*/}
                {/*            <img src="https://picsum.photos/600.jpg?image=261" alt="" className="img-fluid"/>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <div className="col-md-3">*/}
                {/*        <a href="https://picsum.photos/1200/768.jpg?image=250" data-toggle="lightbox">*/}
                {/*            <img src="https://picsum.photos/600.jpg?image=250" alt="" className="img-fluid"/>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {getProjectInfos()}
            </div>
        </div>
    );
};

export default Work;