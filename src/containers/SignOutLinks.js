import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/action/authAction';
//import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
//import { AppHeaderDropdown } from '@coreui/react';


const SignInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to={'/signin'}>Sign In</NavLink></li>
           </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks);