import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/action/authAction';

const SignInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/Register'>Admin</NavLink></li>
            <li><NavLink to='/Driver'>Driver</NavLink></li>
            <li><NavLink to='/Add'>Train</NavLink></li>
            <li><NavLink to='/Search'>Shedule</NavLink></li>
            <li><NavLink to='/Edit'>Edit</NavLink></li>
            <li><NavLink to='/Notifications'>Notifications</NavLink></li>
            <li><NavLink to='/Passenger'>Passenger</NavLink></li>
            
            <li><NavLink to='/actlog' className='btn btn-floating blue darken-3'>
             PK   {props.profile.initials}
            </NavLink></li>
            <li><NavLink to='/signin' onClick={props.logout}>Log Out</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks);