import {LOGIN, SET_HACK_LIST} from '../';
import axios from 'axios';

export const loginThunk = () => {
  return "Hello"
}

export const setHackathonList = (hackathons) => (dispatch) => {
	console.log("setHackathonList");
	axios.get('/events')
	    .then(res => {
	        dispatch({
				type: SET_HACK_LIST,
				hackathons: res.data.events
			});	
	    })
	    .catch(err => console.log(err));
}
