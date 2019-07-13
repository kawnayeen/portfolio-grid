import React from 'react';
import {Container} from 'reactstrap';
import Header from "./header";
import Footer from "./footer";
import Home from "./content/home";
import Resume from "./content/resume";
import Work from "./content/work";
import Contact from "./content/contact/contact";

const App = () => {
    return (
        <Container>
            <Header/>
            {/*<Home/>*/}
            {/*<Resume/>*/}
            {/*<Work/>*/}
            <Contact/>
            <Footer/>
        </Container>
    );
};

export default App;
