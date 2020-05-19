import { combineReducers } from 'redux';
import allMetallicsReducer from './allMetallicsReducer';
import allBeadsReducer from './allBeadsReducer';
import allDMCReducer from './allDMCReducer';
import allSilksReducer from './allSilksReducer';
import selectedReducer from './selectedReducer';



export default combineReducers({
	dmcs: allDMCReducer,
	beads: allBeadsReducer,
	silks: allSilksReducer,
	metallics: allMetallicsReducer,
	selectedReducer: selectedReducer


});
