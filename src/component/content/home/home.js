import React from 'react';
import Skill from "./skill";
import Legend from "../../common/legend";
import ContentArea from "../../common/content";

const Home = () => {
    return (
        <div id="home" className="collapse show">
            <Legend
                title="Welcome to My Page"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, recusandae."
                bgStyle="primary"/>
            <ContentArea title="My Skills"
                         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nostrum libero, maxime
                    neque aliquid expedita nobis odio veniam aperiam nemo.">
                <hr/>
                <Skill name="HTML" selfMarking={100}/>
                <Skill name="CSS" selfMarking={100}/>
                <Skill name="JavaScript" selfMarking={85}/>
                <Skill name="PHP" selfMarking={75}/>
                <Skill name="Python" selfMarking={65}/>
            </ContentArea>
        </div>
    );
};

export default Home;