import React from 'react';
import MenuItem from "./menu.item";
import {faEnvelope, faFolderOpen, faGraduationCap, faHome} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
    return (
        <div className="d-flex flex-row text-white align-items-stretch text-center">
            <MenuItem name="Home" backgroundColor="bg-primary" icon={faHome} path="/"/>
            <MenuItem name="Resume" backgroundColor="bg-success" icon={faGraduationCap} path="/resume"/>
            <MenuItem name="Work" backgroundColor="bg-warning" icon={faFolderOpen} path="/work"/>
            <MenuItem name="Contact" backgroundColor="bg-danger" icon={faEnvelope} path="/contact"/>
        </div>
    );
};

export default Menu;