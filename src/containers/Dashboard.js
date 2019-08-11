import React, { Component } from 'react'
import Notifications from './Notification'
import MessageList from '../Messages/messagelist'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component{
    render() {
      // console.log(this.props);
      const {messages,auth , notifications} = this.props;

      if(!auth.uid) return <Redirect to='/signin'/>

      return (
        <div className="dashboard container">
          <div className="row">
              <div className="col s12 m6">
                  <MessageList messages={messages}/>
              </div>
              <div className="col s12 m5 offset-m1">
                  <Notifications notifications = {notifications}/>
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
    {collection:'messages',limit:4,orderBy:['createdOn','desc']},{collection:'notifications',limit:4,orderBy:['time','desc']}
  ])
)(Dashboard)


// class Dashboard extends Component {
//   render(){
//     return (
//         <div className="dashboard container">
//           <div className="row">
//             <div className="col s12 m6">
//               <MessageList/>
//             </div>
//             <div className="col s12 m5 offset-m1">
//               <Notifications/>
//             </div>
//           </div> 
//         </div>
//     )
//   }
// }

// export default Dashboard;