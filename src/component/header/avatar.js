import React from 'react';
import avatar from "../../asset/img/avatar.jpg";
import {Col} from "reactstrap";

const Avatar = () => {
    return (
        <Col lg={4} md={5} sm={12}>
            <img src={avatar}/>
        </Col>
    );
};

export default Avatar;