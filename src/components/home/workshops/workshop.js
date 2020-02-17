import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Workshops extends Component {

  render() {
    const jsx = this.props.workshops.map((w, id) => {
      let path = `workshop/${w.id}`
      return (
        <div className="col-md-3 col-sm-6 workshops-event" key={id}>
          <Link className="hackathon-link" to={path}>
            <img src={w.imageLink} width="250px" className="workshop-img" alt="" />
            <br /><br />
            <h5 class="card-title">{w.title}</h5>
          </Link>
        </div >
      )
    })
    return (

      <div className="container" >
        <br />
        <br />
        <h1 className="text-center font-weight-bold">Workshops</h1>
        <br /> <br />
        <div className="row text-center">
          {jsx}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    workshops: state.otherEvents.workshop.events
  }
}

export default connect(mapStateToProps)(Workshops);
