import React from 'react';
import {Row} from "reactstrap";
import Avatar from "./avatar";
import ProfileAndMenu from "./profile.and.menu";

const Header = () => {
    return (
        <header id={"main-header"}>
            <Row noGutters>
                <Avatar/>
                <ProfileAndMenu/>
            </Row>
        </header>
    );
};

export default Header;