import React from 'react'
import MessageSummary from '../Passenger/summary'
import {Link} from 'react-router-dom'

const MessageList = ({notificationPeople}) => {
    return(
        <div className="message-list section">
            {notificationPeople && notificationPeople.map(notificationPeople =>{
                return (
                    <Link to={'/message/' + notificationPeople.id} key={notificationPeople.id}>
                    <MessageSummary notificationPeople={notificationPeople} />
                                
                    </Link>
                )
            })}
        </div>
    )
}

export default MessageList