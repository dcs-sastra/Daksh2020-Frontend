import { combineReducers } from 'redux';
import {hackathonReducer} from './hackathonReducer';



export const rootReducer = combineReducers({
  user: (state = {}, action) => state,
  hackathon: hackathonReducer
});
