import React from 'react';
import JobExperience from "./job.experience";
import Legend from "../../common/legend";
import ContentArea from "../../common/content";
import {useSelector} from 'react-redux';

const Resume = () => {
    const experiences = useSelector(state => state.experiences);
    const pageInfo = useSelector(state => state.resumePageInfo);
    const jobExperiences = experiences.map(exp => <JobExperience experience={exp}/>);

    return (
        <div id="resume" className="collapse show">
            <Legend
                title={pageInfo.navTitle}
                description={pageInfo.navDescription}
                bgStyle={pageInfo.navBg}/>
            <ContentArea
                title={pageInfo.pageTitle}
                description={pageInfo.pageDescription}>
                <div className="card-deck">
                    {jobExperiences}
                </div>
            </ContentArea>
        </div>
    );
};

export default Resume;