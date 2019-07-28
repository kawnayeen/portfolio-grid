import {combineReducers} from 'redux';
import skillReducer from './skill/skill.reducer';
import experienceReducer from './experience/experience.reducer';
import projectReducer from './project/project.reducer';
import homePageInfoReducer from './home/home.page.info.reducer';
import contactPageInfoReducer from './contact/contact.page.info.reducer';
import resumePageInfoReducer from './resume/resume.page.info.reducer';
import workPageInfoReducer from './work/work.page.info.reducer';

export default combineReducers({
    skills: skillReducer,
    experiences: experienceReducer,
    projects: projectReducer,
    homePageInfo: homePageInfoReducer,
    contactPageInfo: contactPageInfoReducer,
    resumePageInfo: resumePageInfoReducer,
    workPageInfo: workPageInfoReducer
});