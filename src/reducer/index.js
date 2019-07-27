import {combineReducers} from 'redux';
import skillReducer from './skill/skill.reducer';
import experienceReducer from './experience/experience.reducer';
import projectReducer from './project/project.reducer';
import homePageInfoReducer from './home/home.page.info.reducer';

export default combineReducers({
    skills: skillReducer,
    experiences: experienceReducer,
    projects: projectReducer,
    homePageInfo: homePageInfoReducer
});