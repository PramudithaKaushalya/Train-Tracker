import React from 'react'
import MessageSummary from '../Messages/messagesummary'
import {Link} from 'react-router-dom'

const MessageList = ({messages}) => {
    return(
        <div className="message-list section">
            {messages && messages.map(message =>{
                return (
                    <Link to={'/message/' + message.id} key={message.id}>
                    <MessageSummary message={message} />
                                
                    </Link>
                )
            })}
        </div>
    )
}

export default MessageList