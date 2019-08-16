import React from 'react';

const JobExperience = ({experience}) => {
    const responsibilities = experience.getJobDescription().map(val => <li>{val}</li>);
    const ulStyle = {
        padding: '0px 0px 0px 18px',
        fontSize: '13px'
    };
    return (
        <div className="card mb-3">
            <div className="card-block">
                <h4 className="card-title">{experience.getCompanyName()}</h4>
                <p className="p-2 mb-3 bg-inverse text-white">
                    {experience.getPosition()}
                </p>
                <p className="p-2 mb-3 bg-inverse text-white">
                    {experience.getCompanyPhone()}
                </p>
                <p className="card-text"><ul style={ulStyle}>{responsibilities}</ul></p>
            </div>
            <div className="card-footer">
                <h6 className="text-muted">{experience.getDuration()}</h6>
            </div>
        </div>
    );
};

export default JobExperience;