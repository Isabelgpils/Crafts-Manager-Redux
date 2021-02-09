import { combineReducers } from 'redux';
import metallicReducer from './metallicReducer';
import beadReducer from './beadReducer';
import DMCReducer from './DMCReducer';
import silkReducer from './silkReducer';
import projectReducer from './projectReducer';




export default combineReducers({
	dmcs: DMCReducer,
	beads: beadReducer,
	silks: silkReducer,
	metallics: metallicReducer,
	projectReducer: projectReducer,



});
