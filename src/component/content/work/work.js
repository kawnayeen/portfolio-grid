import React from 'react';
import Project from "../../../model/project";
import ProjectInfoGroup from "./project.info.group";
import Legend from "../../common/legend";

const Work = () => {
    const detailsBaseUrl = 'https://picsum.photos/1200/768.jpg?image=';
    const imageBaseUrl = 'https://picsum.photos/600.jpg?image=';

    const projects = [
        new Project(`${detailsBaseUrl}255`, `${imageBaseUrl}255`),
        new Project(`${detailsBaseUrl}256`, `${imageBaseUrl}256`),
        new Project(`${detailsBaseUrl}257`, `${imageBaseUrl}257`),
        new Project(`${detailsBaseUrl}258`, `${imageBaseUrl}258`),
        new Project(`${detailsBaseUrl}259`, `${imageBaseUrl}259`),
        new Project(`${detailsBaseUrl}260`, `${imageBaseUrl}260`),
        new Project(`${detailsBaseUrl}261`, `${imageBaseUrl}261`),
        new Project(`${detailsBaseUrl}250`, `${imageBaseUrl}250`)
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
            <Legend
                title="My Portfolio"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, blanditiis!"
                bgStyle="warning"/>
            <div className="card card-block py-5">
                <h3>What Have I Built?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nobis cum quidem perferendis
                    repellendus at.</p>
                {getProjectInfos()}
            </div>
        </div>
    );
};

export default Work;