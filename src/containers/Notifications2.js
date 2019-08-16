import React from 'react'
import moment from 'moment'

const Notifications2 = (props) =>{
    const {notifications2} = props;
    return(
        <div>
        <div className="section notf notfw col s4">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Message Log
                    </span>
                    <ul className='notification-list msgact notf2'>
                        {notifications2 && notifications2.map(item => {
                            return(
                                <li key={item.id}>
                                    <span className='red-text'>{item.admin}(Admin) </span>
                                    <span>{item.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(item.time.toDate()).format('MMMM Do YYYY, h:mm:ss a')}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
        <div className="section notf notfw col s4">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Train Log
                    </span>
                    <ul className='notification-list msgact notf2'>
                        {notifications2 && notifications2.map(item => {
                            return(
                                <li key={item.id}>
                                    <span className='red-text'>{item.admin}(Admin) </span>
                                    <span>{item.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(item.time.toDate()).format('MMMM Do YYYY, h:mm:ss a')}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
        <div className="section notf notfw col s4">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Driver Log
                    </span>
                    <ul className='notification-list msgact notf2'>
                        {notifications2 && notifications2.map(item => {
                            return(
                                <li key={item.id}>
                                    <span className='red-text'>{item.admin}(Admin) </span>
                                    <span>{item.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(item.time.toDate()).format('MMMM Do YYYY, h:mm:ss a')}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Notifications2