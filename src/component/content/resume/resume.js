import React from 'react';
import JobExperience from "./job.experience";
import {useSelector} from 'react-redux';
import Page from "../../common/page";

const Resume = () => {
    const experiences = useSelector(state => state.experiences);
    const pageInfo = useSelector(state => state.resumePageInfo);
    const jobExperiences = experiences.map(exp => <JobExperience experience={exp}/>);

    return (
        <Page id="resume" pageInfo={pageInfo}>
            <div className="card-deck">
                {jobExperiences}
            </div>
        </Page>
    );
};

export default Resume;