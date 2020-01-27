import React, {Component} from 'react';
import {Link as Pink} from "react-scroll";
import {Switch,Route,Link} from 'react-router-dom';

import HackInfo from "../../components/hackathons/hackInfo/HackInfo";
import Contact from "../../components/home/contact/Contact";
import "./Idea.css"

class Idea extends Component{

    state={
      emails:[],
      team:"",
      email:"",
      limit:2,
      abstract:"",
      url:""
    }

    handleEmail = (e) =>{
      this.setState({email:e.target.value})
    }

    handleTeam = (e) =>{
      this.setState({team:e.target.value})
    }

    handleURL = (e) =>{
        this.setState({url:e.target.value})
    }

    validateEmail = () =>{
        if(this.state.emails.length == this.state.limit-1)
        document.getElementById("limiter").className="row limit"

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
        {
          this.setState({emails:[...this.state.emails, this.state.email]})
          this.setState({
              team:"",
              email:""
          })
        }
    }

    onDelete = (index) =>{
        var arr = this.state.emails
        arr.splice(index,1)
        this.setState({emails:arr})

        if(this.state.emails.length == this.state.limit-1)
        {
        document.getElementById("limiter").className="row"
        this.setState({email:""})
        }
    }

    handleAbstract = (e) =>{
        this.setState({abstract:e.target.value})
    }
  
    render(){
        const match = this.props.match;
        return(  
            <>
            <div class="container">

              <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">
                Register
              </button>

              <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                  
                    <div class="modal-header">
                      <h4 class="modal-title">Idea Submission</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <div class="modal-body">
                    <div class="container">
                    <label for="team">Team Name:</label>                      
                      <div class="row">
                    <div><input type="text" class="form-control-sm" placeholder="Team Name" onChange={this.handleTeam} name="team" value={this.state.team}/></div>&nbsp;
                    </div>

                    <br />
                    <label for="emails">Email IDs:</label>                    
                    <ul>
                    {this.state.emails.map((data,index)=><li key={index}><span class="comps">{data}</span> <span class="closer" onClick={()=>this.onDelete(index)}>&times;</span></li>)}
                    </ul>
                    <div class="row" id="limiter">
                      <div><input type="email" class="form-control-sm" placeholder="Your email" onChange={this.handleEmail} name="emails" value={this.state.email}/></div>&nbsp;
                      <button type="button" class="btn btn-danger btn-circle btn-sm" onClick={this.validateEmail}><b>+</b></button> 
                      </div>

                    <br />
                    <label for="abstract">Abstract:</label>
                      <div class="row">
                    <div><textarea type="text" class="form-control-sm" placeholder="Abstract" rows="10" cols="40" onChange={this.handleAbstract} name="abstract" value={this.state.abstract}/></div>&nbsp;
                    </div>

                    <label for="link">Google Drive URL:</label>
                    <div class="row">
                    <div><input type="text" class="form-control-sm" placeholder="URL" onChange={this.handleURL} name="url" value={this.state.url}/></div>&nbsp;
                    </div>

                    <br />
                    <button class="btn btn-danger btn-sm">Submit</button>

                    </div>

                    </div>
                    </div>
                  </div>
                </div>
              </div>
              

                <Switch>
                    <Route path={`${match.path}/:hackName`}><HackInfo hackName={`${match.path}/:hackName`}></HackInfo></Route>
                </Switch>   
                <Contact></Contact>                
            </>
        )
    }
}

export default Idea;