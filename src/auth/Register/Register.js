import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../store/action/authAction';
import {Redirect} from 'react-router-dom';

const loginStyle = {
  width: "90%",
  maxWidth: "500px",
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
    redirectToReferrer: false
  }
 
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.cpassword) {
      this.setState({error:'Passwords did not matching!!!'})
      alert('Passwords did not matching!!!')
    } 
    else if (this.state.name === ''|| this.state.email === '') {
      this.setState({error:'Fiels are empty'})
      alert('All fields are required!!!')
    } 
    else{
      this.props.register(this.state);
      this.setState({redirectToReferrer: true}) 
      alert("Create Admin Successfully!!!")
    } 
    this.props.history.push('/Dashboard');   
  }
  render() {
    const { authError } = this.props;
    const {from} = this.props.location.state || {
      from: {
        pathname: '/Register'
      }
    }
    const {redirectToReferrer} = this.state
    if (redirectToReferrer && {authError}==null) {
      return (<Redirect to={from}/>)
    }
    return (

      <div style={loginStyle} className="white">
       
        <form onSubmit={this.handleSubmit}>

        <h5>Register the Administrators</h5>
        
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