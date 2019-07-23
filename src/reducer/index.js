import {combineReducers} from 'redux';
import skillReducer from './skill/skill.reducer';
import experienceReducer from './experience/experience.reducer';

export default combineReducers({
    skills: skillReducer,
    experiences: experienceReducer
});