import React from 'react';

const ContentArea = ({title, description, children}) => {
    return (
        <div className="card card-block py-5">
            <h3>{title}</h3>
            <p>{description}</p>
            {children}
        </div>
    );
};

export default ContentArea;