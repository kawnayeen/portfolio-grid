import React from 'react';
import ProjectInfoGroup from "./project.info.group";
import Legend from "../../common/legend";
import ContentArea from "../../common/content";
import {useSelector} from 'react-redux';

const Work = () => {

    const projects = useSelector(state => state.projects);

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
            <ContentArea
                title="What Have I Built?"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nobis cum quidem perferendis
                    repellendus at."
            >
                {getProjectInfos()}
            </ContentArea>
        </div>
    );
};

export default Work;