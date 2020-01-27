import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authStateRefresh } from './actions/Thunks/thunk';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './components/routes/Routes';
import Navbar from './components/navbar/Navbar';
import Contact from './components/home/contact/Contact';

class App extends React.Component {
  componentDidMount() {
    this.props.authStateRefresh();
  }
  render() {
    return (
      <BrowserRouter>
        <div class="contain">
          <ToastContainer />
          <Navbar />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { authStateRefresh })(App);
