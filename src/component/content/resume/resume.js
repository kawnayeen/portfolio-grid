import React from 'react';
import JobExperience from "./job.experience";
import Legend from "../../common/legend";
import ContentArea from "../../common/content";
import {useSelector} from 'react-redux';

const Resume = () => {
    const experiences = useSelector(state => state.experiences);
    const jobExperiences = experiences.map(exp => <JobExperience experience={exp}/>);

    return (
        <div id="resume" className="collapse show">
            <Legend
                title="My Resume"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, blanditiis!"
                bgStyle="success"/>
            <ContentArea
                title="Where Have I worked"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nobis cum quidem perferendis
                    repellendus at.">
                <div className="card-deck">
                    {jobExperiences}
                </div>
            </ContentArea>
        </div>
    );
};

export default Resume;