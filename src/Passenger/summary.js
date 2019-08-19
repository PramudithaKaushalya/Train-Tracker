import React from 'react';
import moment from 'moment';
import {getFirestore} from 'redux-firestore';

let handleDelete=(e)=>{
    e.preventDefault();
    const firestore = getFirestore();
    firestore.collection("notificationPeople").where("subject", "==", true).delete().then(function() {
        alert("Passenger Notification Successfully Deleted!");
    }).catch(function(error) {
        alert("Error removing document: ", error);
    });
    //this.props.history.push('/Passenger');
  }
const MessageSummary = ({notificationPeople}) =>{

    return(
        <div className="card z-deapth-0 notificationPeople-additional">   
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{notificationPeople.subject}</span>
                    <p>Content: {notificationPeople.message}</p>
                    <p>Posted by: {notificationPeople.userEmail}</p>
                    <p className='red-text'>{moment(notificationPeople.time.toDate()).calendar()}</p>
                    <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0" align='right' onClick={handleDelete}>Delete</button>  
                    </div>
                </div>
        </div>
    )
}

export default MessageSummary