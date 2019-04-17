import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../store/action/authAction'
//import { firestoreConnect } from 'react-redux-firebase';

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
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state);
  }
  
  render() {
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

        <div className="input-field">
        
      </div>
        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Sign Up</button>  
        </div>
        </form>
         
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createUser: (user) => dispatch(createUser(user))
  }
}

export default connect(null, mapDispatchToProps)(Register);