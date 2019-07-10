import React from 'react';
import {Container} from 'reactstrap';
import Header from "./header";
import Footer from "./footer";
import Home from "./content/home";
import Resume from "./content/resume";

const App = () => {
    return (
        <Container>
            <Header/>
            {/*<Home/>*/}
            <Resume/>
            <Footer/>
        </Container>
    );
};

export default App;
