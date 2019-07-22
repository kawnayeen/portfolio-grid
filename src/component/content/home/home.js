import React from 'react';
import Skill from "./skill";
import Legend from "../../common/legend";
import ContentArea from "../../common/content";
import {useSelector} from 'react-redux';

const Home = () => {
    const skills = useSelector(state => state.skills);
    const skillsElement = skills.map(skill => <Skill name={skill.getSubject()} selfMarking={skill.getSelfScore()}/>);
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
                {skillsElement}
            </ContentArea>
        </div>
    );
};

export default Home;