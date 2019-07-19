import React from 'react';
import Skill from "./skill";
import Legend from "../../common/legend";

const Home = () => {
    return (
        <div id="home" className="collapse show">
            <Legend
                title="Welcome to My Page"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, recusandae."
                bgStyle="primary"/>
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