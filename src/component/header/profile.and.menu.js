import React from 'react';
import NameAndLinks from "./name.and.links";
import Title from "./title";
import Menu from "./menu";
import {Col} from "reactstrap";

const ProfileAndMenu = () => {
    return (
        <Col lg={8} md={7} sm={12}>
            <div className="d-flex flex-column">
                <NameAndLinks/>
                <Title/>
                <Menu/>
            </div>
        </Col>
    );
};

export default ProfileAndMenu;