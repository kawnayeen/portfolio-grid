import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faHackerrank, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

const NameAndLinks = () => {
    return (
        <div className="p-5 bg-inverse text-white">
            <div className="name d-flex flex-row justify-content-between align-items-center">
                <h1 className="display-4">John Doe</h1>
                <div><FontAwesomeIcon icon={faHackerrank} size="lg"/></div>
                <div><FontAwesomeIcon icon={faGithub} size="lg"/></div>
                <div><FontAwesomeIcon icon={faLinkedin} size="lg"/></div>
                <div><FontAwesomeIcon icon={faTwitter} size="lg"/></div>
            </div>
        </div>
    );
};

export default NameAndLinks;