import React from 'react';

const Legend = ({title, description, bgStyle}) => {
    const legendStyle = `card card-block card-${bgStyle} text-white py-5`;

    return (
        <div className={legendStyle}>
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
    );
};

export default Legend;