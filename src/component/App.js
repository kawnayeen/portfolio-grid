import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import avatar from '../asset/img/avatar.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAd} from '@fortawesome/free-solid-svg-icons'
import {faHackerrank, faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

const App = () => {
    return (
        <Container>
            <header id={"main-header"}>
                <Row noGutters>
                    <Col lg={4} md={5} sm={12}>
                        <img src={avatar}/>
                    </Col>
                    <Col lg={8} md={7} sm={12}>
                        <div className="d-flex flex-column">
                            <div className="p-5 bg-inverse text-white">
                                <div className="name d-flex flex-row justify-content-between align-items-center">
                                    <h1 className="display-4">John Doe</h1>
                                    <div><FontAwesomeIcon icon={faHackerrank} size="2x"/></div>
                                    <div><FontAwesomeIcon icon={faGithub} size="2x"/></div>
                                    <div><FontAwesomeIcon icon={faLinkedin} size="2x"/></div>
                                    <div><FontAwesomeIcon icon={faTwitter} size="2x"/></div>
                                </div>
                            </div>
                            <div className="p-4 bg-dark">Experienced Full Stack Web Developer</div>
                            <div>
                                <div className="d-flex flex-row text-white align-items-stretch text-center">
                                    <div className="port-item p-4 bg-primary" data-toggle="collapse"
                                         data-target="#home">
                                        <i className="fa fa-home d-block"></i> Home
                                    </div>
                                    <div className="port-item p-4 bg-success" data-toggle="collapse"
                                         data-target="#resume">
                                        <i className="fa fa-graduation-cap d-block"></i> Resume
                                    </div>
                                    <div className="port-item p-4 bg-warning" data-toggle="collapse"
                                         data-target="#work">
                                        <i className="fa fa-folder-open d-block"></i> Work
                                    </div>
                                    <div className="port-item p-4 bg-danger" data-toggle="collapse"
                                         data-target="#contact">
                                        <i className="fa fa-envelope d-block"></i> Contact
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </header>
        </Container>
    );
};

export default App;
