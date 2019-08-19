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
          <div >
            <div className="col s12 m6">
              <MessageList notificationPeople={notificationPeople}/>
            </div>
          </div> 
        </div>
    )       
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    notificationPeople:state.firestore.ordered.notificationPeople,
    auth:state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'notificationPeople',limit:5,orderBy:['time','desc']}
  ])
)(Passenger)
