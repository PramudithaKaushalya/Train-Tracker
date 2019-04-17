import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/action/authAction';

const SignInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/Register'>Add Admin</NavLink></li>
            <li><NavLink to='/Driver'>Add Driver</NavLink></li>
            <li><NavLink to='/Train'>Train Shedule</NavLink></li>
            <li><NavLink to='/' onClick={props.logout}>Log Out</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks);


//import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
//import { AppHeaderDropdown } from '@coreui/react';
// <Nav className="ml-auto" navbar>
// <NavItem className="d-md-down-none">
//   <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">10</Badge></NavLink>
// </NavItem>
// <NavItem className="d-md-down-none">
//   <NavLink href="#"><i className="icon-list"></i></NavLink>
// </NavItem>
// <NavItem className="d-md-down-none">
//   <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
// </NavItem>
// <AppHeaderDropdown direction="down">
//   <DropdownToggle nav>
//     <img src={'../owner.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
//   </DropdownToggle>
//   <DropdownMenu right style={{ right: 'auto' }}>
//     <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
//     <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
//     <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
//     <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
//     <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
//     <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
//     <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
//     <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
//     <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
//     <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
//     <DropdownItem divider />
//     <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
//     <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
//   </DropdownMenu>
// </AppHeaderDropdown>
// </Nav>