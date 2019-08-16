import React, { Component } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import MessageList from '../Passenger/list';

class Passenger extends Component {
  render(){
    const {notificationPeople, auth} = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <MessageList messages={notificationPeople}/>
            </div>
            <div className="col s12 m6 right">
              <MessageList messages={notificationPeople}/>
            </div>
          </div> 
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    messages:state.firestore.ordered.messages,
    auth:state.firebase.auth,
    notifications:state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'notificationPeople',limit:4,orderBy:['time','desc']}
  ])
)(Passenger)
