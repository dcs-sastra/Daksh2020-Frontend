import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();


const middleWare = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
