import { SET_HACK_LIST, ADD_TEAM } from '../actions';

export const hackathonReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_HACK_LIST: return { ...state, hackathons: action.hackathons };
		case ADD_TEAM: return { ...state }
		default: return state;
	}
}
