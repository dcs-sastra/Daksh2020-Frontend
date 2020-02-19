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
  state = {
    navState: true
  }
  componentDidMount() {
    this.props.authStateRefresh();
    if (window.location.pathname === "/random-hack") {
      this.setState({
        navState: false
      })
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div class="contain">
          <ToastContainer toastClassName="large-toast" />
          {this.state.navState && <Navbar />}
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { authStateRefresh })(App);
