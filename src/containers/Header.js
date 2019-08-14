import React from 'react';
import { Link } from 'react-router-dom';
//import Logo from '../Logo.png';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';

const Header = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks/>; 
    return (
        <nav className="nav-wrapper grey darken-3">
            
            <div className='container'>
            <Link to='/' className="brand-logo"> Train Tracks</Link>
            </div>
            <div>    
                
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Header);


//<img src={Logo} alt="Logo" height='70px' width='70px'/>