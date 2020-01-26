import { combineReducers } from 'redux';
import { userReducer } from './user';
import { hackathonReducer } from './hackathonReducer';


export const rootReducer = combineReducers({
  user: userReducer,
  hackathon: hackathonReducer
});
