import React from 'react';
import Skill from "./skill";
import Legend from "../../common/legend";
import ContentArea from "../../common/content";
import {useSelector} from 'react-redux';

const Home = () => {
    const skills = useSelector(state => state.skills);
    const pageInfo = useSelector(state => state.homePageInfo);
    const skillsElement = skills.map(skill => <Skill name={skill.getSubject()} selfMarking={skill.getSelfScore()}/>);
    return (
        <div id="home" className="collapse show">
            <Legend
                title={pageInfo.navTitle}
                description={pageInfo.navDescription}
                bgStyle={pageInfo.navBg}/>
            <ContentArea title={pageInfo.pageTitle}
                         description={pageInfo.pageDescription}>
                <hr/>
                {skillsElement}
            </ContentArea>
        </div>
    );
};

export default Home;