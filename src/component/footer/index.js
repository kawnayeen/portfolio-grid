import React from 'react';
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer id="main-footer" className="p-5 bg-inverse text-white">
            <Row>
                <Col md={6}>
                    <a href="#" className="btn btn-outline-secondary" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faCloud} size="lg"/> Download My Resume
                    </a>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;