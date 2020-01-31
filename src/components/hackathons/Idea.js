import React, { Component } from 'react';
import { connect } from 'react-redux'
import { registerHack } from '../../actions/Thunks/thunk';
import "./Idea.css"

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      team: "",
      email: "",
      minlimit: 1,
      maxlimit: 4,
      abstract: "",
      url: ""
    }
    this.handleSubmit = (e) => {
      if (this.state.emails.length < this.state.minlimit)
        return
      e.preventDefault();
      const data = {
        "teamName": this.state.team,
        "teamMatesEmail": this.state.emails,
        "ideaInConcise": this.state.abstract,
        "documentLink": this.state.url,
        "eventId": this.props.id
      }
      console.log(data);
      this.props.registerHack(data);
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  handleTeam = (e) => {
    this.setState({ team: e.target.value })
  }

  handleURL = (e) => {
    this.setState({ url: e.target.value })
  }

  validateEmail = () => {
    if (this.state.emails.length > this.state.maxlimit - 1) {
      document.getElementById("limiter").className = "limit"
      return;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      this.setState({ emails: [...this.state.emails, this.state.email] })
    }
  }

  onDelete = (index) => {
    var arr = this.state.emails
    arr.splice(index, 1)
    this.setState({ emails: arr })

    if (this.state.emails.length == this.state.maxlimit - 1) {
      document.getElementById("limiter").className = "enable"
      this.setState({ email: "" })
    }
  }

  handleAbstract = (e) => {
    this.setState({ abstract: e.target.value })
  }

  clear = () => {
    this.setState({
      emails: [],
      team: "",
      email: "",
      maxlimit: 4,
      minlimit: 1,
      abstract: "",
      url: ""
    })
  }

  render() {
    const match = this.props.match;
    return (
      <>
        <div class="modal fade" id="hackregister">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">

              <div class="modal-header">
                <h4 class="modal-title">Idea Submission</h4>
                <button type="button" class="close" data-dismiss="modal" onClick={this.clear}>&times;</button>
              </div>

              <div class="modal-body">

                <label for="team">Team Name:</label>
                <input type="text" class="form-control" name="team" placeholder="Team Name" onChange={this.handleChange} name="team" value={this.state.team} />&nbsp;

                <br />
                <label for="emails">Email IDs:</label>
                <div>
                  <ul>
                    {this.state.emails.map((data, index) => <li key={index}><span class="comps">{data}</span> <span class="closer" onClick={() => this.onDelete(index)}>&times;</span></li>)}
                  </ul>
                </div>
                <br />
                <div class="input-group" id="limiter">
                  <input type="email" class="form-control" placeholder="Your email" onChange={this.handleEmail} name="emails" value={this.state.email} />
                  <div className="input-group-append">
                    <button type="button" class="btn btn-danger btn-circle btn" onClick={this.validateEmail}><b>+</b></button>
                  </div>
                </div>

                <br />
                <label for="abstract">Abstract:</label>
                <textarea type="text" class="form-control" placeholder="Abstract" rows="10" cols="40" onChange={this.handleChange} name="abstract" value={this.state.abstract} />
                <br />
                <label for="link">Google Drive URL:</label>

                <input type="text" class="form-control" placeholder="URL" onChange={this.handleChange} name="url" value={this.state.url} />

                <br />
                <button class="btn btn-danger btn-block" type="submit" onClick={this.handleSubmit}>Submit</button>

              </div>
            </div>
          </div>
        </div>
        {/* <Switch>
          <Route path={`${match.path}/:hackName`}><HackInfo hackName={`${match.path}/:hackName`}></HackInfo></Route>
        </Switch> */}
        {/* <Contact></Contact> */}
      </>
    )
  }
}

export default connect(null, { registerHack })(Idea);
