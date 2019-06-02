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
            <li><NavLink to='/' onClick={props.logout}>Log Out</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks);