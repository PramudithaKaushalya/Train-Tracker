import React from 'react'
import moment from 'moment'

const Notifications = (props) =>{
    const {notifications} = props;
    return(
        <div className="section notf">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Notifications
                    </span>
                    <ul className='notification-list'>
                        {notifications && notifications.map(item => {
                        return(
                            <li key={item.id}>
                            <span>{item.user}(Admin) </span><br/>
                            <span className='red-text'>{item.content}</span>
                            <div className="grey-text note-date">
                                {moment(item.time.toDate()).fromNow()}
                            </div>
                            </li>
                        )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications

