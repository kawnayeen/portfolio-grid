import {combineReducers} from 'redux';
import skillReducer from './skill/skill.reducer';

export default combineReducers({
    skills: skillReducer
});