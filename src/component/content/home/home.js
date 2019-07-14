import React from 'react';
import Skill from "./skill";

const Home = () => {
    return (
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
                <Skill name="HTML" selfMarking={100}/>
                <Skill name="CSS" selfMarking={100}/>
                <Skill name="JavaScript" selfMarking={85}/>
                <Skill name="PHP" selfMarking={75}/>
                <Skill name="Python" selfMarking={65}/>
            </div>
        </div>
    );
};

export default Home;