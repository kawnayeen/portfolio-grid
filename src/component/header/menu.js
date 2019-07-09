import React from 'react';
import MenuItem from "./menu.item";
import {faEnvelope, faFolderOpen, faGraduationCap, faHome} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
    return (
        <div className="d-flex flex-row text-white align-items-stretch text-center">
            <MenuItem name="Home" backgroundColor="bg-primary" icon={faHome}/>
            <MenuItem name="Resume" backgroundColor="bg-success" icon={faGraduationCap}/>
            <MenuItem name="Work" backgroundColor="bg-warning" icon={faFolderOpen}/>
            <MenuItem name="Contact" backgroundColor="bg-danger" icon={faEnvelope}/>
        </div>
    );
};

export default Menu;