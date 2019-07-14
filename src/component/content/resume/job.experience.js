import React from 'react';

const JobExperience = ({experience}) => {
    return (
        <div className="card mb-3">
            <div className="card-block">
                <h4 className="card-title">{experience.getCompanyName()}</h4>
                <p className="card-text">{experience.getJobDescription()}</p>
                <p className="p-2 mb-3 bg-inverse text-white">
                    {experience.getPosition()}
                </p>
                <p className="p-2 mb-3 bg-inverse text-white">
                    {experience.getCompanyPhone()}
                </p>
            </div>
            <div className="card-footer">
                <h6 className="text-muted">{experience.getDuration()}</h6>
            </div>
        </div>
    );
};

export default JobExperience;