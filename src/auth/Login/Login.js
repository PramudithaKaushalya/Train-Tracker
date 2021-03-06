import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/action/authAction';
import {Redirect} from 'react-router-dom';

const loginStyle = {
  width: "90%",
  maxWidth: "500px",
  margin: "100px auto",
  border: "5px solid #ddd",
  borderRadius: "5px",
  padding: "30px"
}

class Login extends Component {
  
  state = {
    email: '',
    password: '',
    redirectToReferrer: false
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.login(this.state);
    //this.setState({redirectToReferrer: true})
    //this.props.history.push('/');

  }
  
  render() {
    const { auth, authError } = this.props;
    if(auth.uid) return <Redirect to='/'/>
    const {from} = this.props.location.state || {
      from: {
        pathname: '/signin'
      }
    }
    const {redirectToReferrer} = this.state.redirectToReferrer;
    if (redirectToReferrer) {
      return (<Redirect to={from}/>)
    }
    return (
      <div style={loginStyle} className="white">
       
        <form onSubmit={this.handleSubmit}>

        <h5>SIGN IN</h5>
        Sign In to your account.
        <br/>

        <div className="input-field">  
          <label htmlFor="email"> Email </label>  
          <input id="email" type="email" onChange={this.handleChange}/>       
        </div>

        <div className="input-field"> 
          <label htmlFor="password"> Password </label>  
          <input id="password" type="password" onChange={this.handleChange}/>
        </div> 

        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Sign In</button>  
        </div>
        <div className="red-text center">
            { authError ? <p>{authError}</p>: null}
          </div>
        </form>
      </div>
    );

    
  }
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    login: (creds) => dispatch(login(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);