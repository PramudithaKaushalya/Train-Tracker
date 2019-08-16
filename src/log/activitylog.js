import React, { Component } from 'react'
import Notifications2 from '../containers/Notifications2'
//import MessageList from '../Messages/messagelist'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Log extends Component{
    render() {
      // console.log(this.props);
      const {auth , notifications2} = this.props;

      if(!auth.uid) return <Redirect to='/signin'/>

      return (
        <div className="dashboard container">
          <div className="row">
             
              <div className="col s12">
                  <Notifications2 notifications2 = {notifications2}/>
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
    notifications2:state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'messages',limit:4,orderBy:['createdOn','desc']},{collection:'notifications',orderBy:['time','desc']}
  ])
)(Log)