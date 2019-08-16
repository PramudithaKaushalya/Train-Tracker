import React from 'react';
import moment from 'moment';

const MessageSummary = ({message}) =>{
    return(
        <div className="card z-deapth-0 message-additional">5   
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{message.subject}</span>
                    <p>Posted by {message.userEmail}</p>
                    <p className='red-text'>{moment(message.time.toDate()).calendar()}</p>
                </div>
        </div>
    )
}

export default MessageSummary