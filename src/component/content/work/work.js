import React, {useState} from 'react';
import ProjectInfoGroup from "./project.info.group";
import {useSelector} from 'react-redux';
import Page from "../../common/page";
import ProjectDetails from "./project.details";

const Work = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [project, setProject] = useState(null);
    const projects = useSelector(state => state.projects);
    const pageInfo = useSelector(state => state.workPageInfo);

    const projectClicked = clickedProject => {
        setShowDetails(true);
        setProject(clickedProject);
    };

    const closeDetails = () => {
        setShowDetails(false);
        setProject(null);
    };

    const getProjectInfos = () => {
        let segment = [];
        for (let i = 0; i < projects.length; i = i + 4) {
            segment.push(projects.slice(i, i + 4));
        }
        return segment.map(seg => <ProjectInfoGroup projects={seg} onSelect={p => projectClicked(p)}/>);
    };

    return (
        <Page id="work" pageInfo={pageInfo}>
            {getProjectInfos()}
            {showDetails && <ProjectDetails project={project} onClose={() => closeDetails()}/>}
        </Page>
    );
};

export default Work;