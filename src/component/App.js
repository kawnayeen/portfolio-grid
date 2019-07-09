import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {faHome, faGraduationCap, faFolderOpen, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Avatar from "./header/avatar";
import NameAndLinks from "./header/name.and.links";
import Title from "./header/title";
import MenuItem from "./header/menu.item";

const App = () => {
    return (
        <Container>
            <header id={"main-header"}>
                <Row noGutters>
                    <Avatar/>
                    <Col lg={8} md={7} sm={12}>
                        <div className="d-flex flex-column">
                            <NameAndLinks/>
                            <Title/>
                            <div>
                                <div className="d-flex flex-row text-white align-items-stretch text-center">
                                    <MenuItem name="Home" backgroundColor="bg-primary" icon={faHome}/>
                                    <MenuItem name="Resume" backgroundColor="bg-success" icon={faGraduationCap}/>
                                    <MenuItem name="Work" backgroundColor="bg-warning" icon={faFolderOpen}/>
                                    <MenuItem name="Contact" backgroundColor="bg-danger" icon={faEnvelope}/>
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
