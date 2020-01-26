import React from 'react'
import { Modal, ModalBody, ModalHeader, Button, Input } from 'reactstrap'
import { connect } from 'react-redux';
import dakshLogo from '../../assets/dakshLogo.svg'
import './Model.css';
import { loginThunk, signupThunk } from '../../actions/Thunks/thunk';


class MyModel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'login',
      email: '',
      name: '',
      password: '',
      college: '',
      regno: '',
      year: 1,
    }
    this.clear = () => {
      this.setState({
        email: '',
        name: '',
        password: '',
        college: '',
        regno: '',
        year: 1
      })
    }
    this.handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    this.handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      if (this.state.mode === 'login') {
        this.props.loginThunk(this.state.email, this.state.password);
      } else {
        this.props.signupThunk({
          name: this.state.name,
          email: this.state.email,
          college: this.state.college,
          regNo: this.state.regno,
          password: this.state.password,
          year: this.state.year
        })
      }
    }
    this.setMode = (val) => {
      this.setState({
        mode: val
      })
    }
  }

  render() {
    const { isOpen, toggle } = this.props;
    const { mode, name, email, password, college, regno, year } = this.state;
    if (mode === 'login') {
      return (
        <div>
          <Modal isOpen={isOpen} toggle={toggle} >
            <ModalHeader toggle={toggle}>Login</ModalHeader>
            <ModalBody className="text-center">
              <img src={dakshLogo} alt=".." />
              <div className="container mt-4 text-left">
                <form className="authform" onSubmit={this.handleSubmit}>
                  <label for="email">
                    Registered Email
                </label>
                  <input type="email" name="email" className="form-control" value={email} onChange={this.handleChange} required />
                  <label for="password">
                    Password
                </label>
                  <input type="password" name="password" className="form-control" value={password} onChange={this.handleChange} required />
                  <br />
                  <Button size="lg" block type="submit" className="login-btn">Dive in   <i className="fas fa-door-open"></i></Button>
                  <div className="redirect" onClick={() => {
                    this.setMode("signin");
                    this.clear();
                  }}>Not having an account?</div>
                </form>
                <br /><br />
              </div>
            </ModalBody>
          </Modal>
        </div>
      )
    } else {
      return (
        <div>
          <Modal isOpen={isOpen} toggle={toggle} >
            <ModalHeader toggle={toggle}>Signup</ModalHeader>
            <ModalBody className="text-center">
              <img src={dakshLogo} alt=".." />
              <div className="container mt-4 text-left">
                <form className="authform" onSubmit={this.handleSubmit}>
                  <label for="name">
                    Name
                </label>
                  <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} required />
                  <label for="email">
                    Email
                </label>
                  <input type="email" name="email" className="form-control" value={email} onChange={this.handleChange} required />
                  <label for="password">
                    Password
                </label>
                  <input type="password" name="password" className="form-control" value={password} onChange={this.handleChange} required />
                  <label for="name">
                    College Name
                </label>
                  <input type="text" className="form-control" name="college" value={college} onChange={this.handleChange} required />
                  <label for="name">
                    College Reg No.
                </label>
                  <input type="text" className="form-control" name="regno" value={regno} onChange={this.handleChange} required />
                  <label for="year">
                    Year
                </label>
                  <Input type="select" name="year" value={year} onChange={this.handleChange} required>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Input>
                  <br />
                  <Button size="lg" block type="submit" className="login-btn">Dive in   <i className="fas fa-door-open"></i></Button>
                  <div className="redirect" onClick={() => { this.setMode("login"); this.clear() }}>Already have an Account?</div>
                </form>
                <br /><br />
              </div>
            </ModalBody>
          </Modal>
        </div>
      )
    }
  }
}





export default connect(null, { loginThunk, signupThunk })(MyModel);
