import React from 'react';
import ProjectInfoGroup from "./project.info.group";
import {useSelector} from 'react-redux';
import Page from "../../common/page";

const Work = () => {
    const projects = useSelector(state => state.projects);
    const pageInfo = useSelector(state => state.workPageInfo);

    const getProjectInfos = () => {
        let segment = [];
        for (let i = 0; i < projects.length; i = i + 4) {
            segment.push(projects.slice(i, i + 4));
        }
        return segment.map(seg => <ProjectInfoGroup projects={seg}/>);
    };

    return (
        <Page id="work" pageInfo={pageInfo}>
            {getProjectInfos()}
        </Page>
    );
};

export default Work;