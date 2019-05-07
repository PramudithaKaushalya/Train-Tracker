import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../store/action/authAction';
import {Redirect} from 'react-router-dom';
import Switch from "react-switch";

const loginStyle = {
  width: "90%",
  maxWidth: "315px",
  margin: "100px auto",
  border: "5px solid #ddd",
  borderRadius: "5px",
  padding: "30px"
}

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    checked: false,
    redirectToReferrer: false
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handle(checked) {
    this.setState({ checked });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.password !== e.confirm) {
      this.setState({error:'Password do not match'})
  } 
    this.props.register(this.state);
    
    this.setState({redirectToReferrer: true})
    
  }
  render() {
    const { authError } = this.props;
    const {from} = this.props.location.state || {
      from: {
        pathname: '/Dashboard'
      }
    }
    const {redirectToReferrer} = this.state
    if (redirectToReferrer && {authError}==null) {
      return (<Redirect to={from}/>)
    }
    return (

      <div style={loginStyle}>
       
        <form onSubmit={this.handleSubmit}>

        <h5>SIGN UP</h5>
        Sign Up to Train Tracks.
        <br/>

        <div className="input-field">  
          <label htmlFor="name"> Name </label>  
          <input id="name" type="text" onChange={this.handleChange}/>       
        </div>

        <div className="input-field">  
          <label htmlFor="email"> Email </label>  
          <input id="email" type="email" onChange={this.handleChange}/>       
        </div>

        <div className="input-field"> 
          <label htmlFor="password"> Password </label>  
          <input id="password" type="password" onChange={this.handleChange}/>
        </div> 

        <div className="input-field"> 
          <label htmlFor="cpassword"> Confirm Password </label>  
          <input id="cpassword" type="password" onChange={this.handleChange}/>
        </div>
        <label>
        <span>Admin</span>
        <Switch id="admin" onChange={this.handle}  checked={this.state.checked}/>
        </label>  
        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Sign Up</button>  
        </div>
        <div className="red-text center">
            { authError ? <p>{authError}</p>: null}
          </div>
        </form>
         
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    register: (user) => dispatch(register(user))
  }
}

export default connect(null, mapDispatchToProps)(Register);