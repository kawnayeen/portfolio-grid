import React from 'react';
import {Container} from 'reactstrap';
import Header from "./header";
import Footer from "./footer";
import Home from "./content/home/home";
import Resume from "./content/resume/resume";
import Work from "./content/work/work";
import {BrowserRouter, Route} from 'react-router-dom';
import Contact from "./content/contact/contact";

const App = () => {
    return (
        <Container>
            <BrowserRouter>
                <Header/>
                <Route path="/" exact component={Home}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/work" component={Work}/>
                <Route path="/contact" component={Contact}/>
            </BrowserRouter>
            <Footer/>
        </Container>
    );
};

export default App;
