import React from 'react';
import moment from 'moment';

const MessageSummary = ({message}) =>{
    return(
        <div className="card z-deapth-0 message-additional">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{message.title}</span>
                    <p>Posted by {message.author}</p>
                    <p className='red-text'>{moment(message.createdOn.toDate()).calendar()}</p>
                </div>
        </div>
    )
}

export default MessageSummary