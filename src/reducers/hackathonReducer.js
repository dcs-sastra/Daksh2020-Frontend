import {SET_HACK_LIST} from '../actions';

export const hackathonReducer = (state = {}, action) => {
	switch(action.type) {
		case SET_HACK_LIST: return {...state, hackathons: action.hackathons};
		default: return state;
	}
}