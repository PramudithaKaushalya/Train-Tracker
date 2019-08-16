import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import moment from 'moment'

const messagedetails = (props) => {
    const {message} = props;
    if(message){
      return(
        <div className='container section project-details'>
          <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">{message.subject}</span>
                <p> {message.message}</p>
              </div>
              <div className="card-action gret lighten-4 grey-text">
                  <div>Posted by {message.userEmail}</div>
                  <div>{moment(message.time.toDate()).calendar()}</div>
              </div>
              <button className="btn blue lighten-1 z-depth-0" align='right'>Delete</button> 
          </div>
        </div>
      )
    } else{
      return (
          <div className="container center">
            <p>Loading Message..</p>
          </div>
        )
    }
  
}

const mapStateToProps = (state,ownProps) =>{
  const id = ownProps.match.params.id;
  const messages = state.firestore.data.messages;
  const message = messages ? messages[id] :null
  return{
    message:message
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'notificationPeople'}
  ])
)(messagedetails)
