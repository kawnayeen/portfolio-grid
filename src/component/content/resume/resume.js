import React from 'react';
import Experience from "../../../model/experience";
import JobExperience from "./job.experience";
import Legend from "../../common/legend";

const Resume = () => {
    const experiences = [
        new Experience(
            'Devmasters',
            '(555) 555-5555',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, neque!',
            'Full Stack Developer',
            2015,
            2017
        ),
        new Experience(
            'Websites Pro',
            '(444) 444-4444',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, neque!',
            'Front End Developer',
            2013,
            2015
        ),
        new Experience(
            '123 Designs',
            '(333) 333-3343',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, neque!',
            'Designer',
            2010,
            2013
        )
    ];

    const jobExperiences = experiences.map(exp => <JobExperience experience={exp}/>);
    return (
        <div id="resume" className="collapse show">
            <Legend
                title="My Resume"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, blanditiis!"
                bgStyle="success"/>
            <div className="card card-block py-5">
                <h3>Where Have I Worked?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nobis cum quidem perferendis
                    repellendus at.</p>
                <div className="card-deck">
                    {jobExperiences}
                </div>
            </div>
        </div>
    );
};

export default Resume;