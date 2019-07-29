import React from 'react';
import {faGithub, faHackerrank, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useSelector} from 'react-redux';
import ProfileLink from "./profile.link";

const NameAndLinks = () => {
    const nameAndLink = useSelector(state => state.nameAndLink);

    return (
        <div className="p-5 bg-inverse text-white">
            <div className="name d-flex flex-row justify-content-between align-items-center">
                <h2>{nameAndLink.name}</h2>
                <ProfileLink url={nameAndLink.hackerRank} icon={faHackerrank}/>
                <ProfileLink url={nameAndLink.gitHub} icon={faGithub}/>
                <ProfileLink url={nameAndLink.linkedIn} icon={faLinkedin}/>
                <ProfileLink url={nameAndLink.twitter} icon={faTwitter}/>
            </div>
        </div>
    );
};

export default NameAndLinks;