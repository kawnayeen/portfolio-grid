import React from 'react';
import ProjectInfoGroup from "./project.info.group";
import Legend from "../../common/legend";
import ContentArea from "../../common/content";
import {useSelector} from 'react-redux';

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
        <div id="work" className="collapse show">
            <Legend
                title={pageInfo.navTitle}
                description={pageInfo.navDescription}
                bgStyle={pageInfo.navBg}/>
            <ContentArea
                title={pageInfo.pageTitle}
                description={pageInfo.pageDescription}>
                {getProjectInfos()}
            </ContentArea>
        </div>
    );
};

export default Work;