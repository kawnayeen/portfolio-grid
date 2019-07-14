import React from 'react';
import Experience from "../../../model/experience";
import JobExperience from "./job.experience";

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
            <div className="card card-block card-success text-white py-5">
                <h2>My Resume</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, blanditiis!</p>
            </div>
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