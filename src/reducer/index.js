import {combineReducers} from 'redux';
import skillReducer from './skill/skill.reducer';
import experienceReducer from './experience/experience.reducer';
import projectReducer from './project/project.reducer';

export default combineReducers({
    skills: skillReducer,
    experiences: experienceReducer,
    projects: projectReducer
});