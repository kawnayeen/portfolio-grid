import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProfileLink = ({url, icon}) => {
    const anchorStyle = {
        color: 'inherit',
        textDecoration: 'none'
    };
    return (
        <div>
            <a href={url} style={anchorStyle} target="_blank">
                <FontAwesomeIcon icon={icon} size="lg"/>
            </a>
        </div>
    );
};

export default ProfileLink;