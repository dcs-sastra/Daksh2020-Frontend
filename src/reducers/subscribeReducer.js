import { SUBSCRIBE } from '../actions';

export const subscribeReducer = (state = {}, action) => {
	switch (action.type) {
		case SUBSCRIBE: return { email: action.data };
		default: return state;
	}
}
