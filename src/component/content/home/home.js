import React from 'react';
import Skill from "./skill";
import {useSelector} from 'react-redux';
import Page from "../../common/page";

const Home = () => {
    const skills = useSelector(state => state.skills);
    const pageInfo = useSelector(state => state.homePageInfo);
    const skillsElement = skills.map(skill => <Skill name={skill.getSubject()} selfMarking={skill.getSelfScore()}/>);

    return (
        <Page id="home" pageInfo={pageInfo}>
            <hr/>
            {skillsElement}
        </Page>
    );
};

export default Home;