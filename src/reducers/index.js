import { combineReducers } from 'redux';
import { userReducer } from './user';
import { hackathonReducer } from './hackathonReducer';
import { subscribeReducer } from './subscribeReducer';



export const rootReducer = combineReducers({
  user: userReducer,
  hackathon: hackathonReducer,
  subscribe: subscribeReducer,
});
