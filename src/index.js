import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux'

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>

)


ReactDOM.render(<Root />, document.getElementById('root'));
