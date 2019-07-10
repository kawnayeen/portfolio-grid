import React from 'react';
import {Container} from 'reactstrap';
import Header from "./header";
import Footer from "./footer";

const App = () => {
    return (
        <Container>
            <Header/>
            <div id="home" className="collapse show">
                <div className="card card-block card-primary text-white py-5">
                    <h2>Welcome to My Page</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
                        recusandae.</p>
                </div>
                <div className="card card-block py-5">
                    <h3>My Skills</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nostrum libero, maxime
                        neque aliquid expedita nobis odio veniam aperiam nemo.</p>
                    <hr/>
                    <h4>HTML</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" role="progress-bar" style={{width:'100%'}}></div>
                    </div>
                    <h4>CSS</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" role="progress-bar" style={{width:'100%'}}></div>
                    </div>
                    <h4>JavaScript</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" role="progress-bar" style={{width:'85%'}}></div>
                    </div>
                    <h4>PHP</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" role="progress-bar" style={{width:'75%'}}></div>
                    </div>
                    <h4>Python</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" role="progress-bar" style={{width:'65%'}}></div>
                    </div>

                </div>
            </div>
            <Footer/>
        </Container>
    );
};

export default App;
