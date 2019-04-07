import React, { Component } from 'react';

const loginStyle = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
}

class Login extends Component {
 
  constructor(props) {
    super(props)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
  }   

  authWithEmailPassword(event) {
    event.preventDefault()
    console.log("Login")
    console.table([{
      email: this.emailInput.value,
      password: this.passwordInput.value,
    }])
  }
  render() {
    return (
      <div style={loginStyle}>
       <h4>SIGN IN</h4>
       Sign In to your account
        <form onSubmit= { (event) => { this.authWithEmailPassword(event) }} ref={ (form) => {this.loginForm = form }}/>
     
        <div style={{marginBottom: "10px"}} className="pt-callout pt-icon-info-sign">
          
          <label className="pt-label">
            Email
            <input style={{width: "100%"}} className="pt-input" name="email" type="email" ref={(input) => {this.emailInput = input}} 
            placeholder= "Email">
            </input>  
          </label>
        
          <label className="pt-label">
            Password
            <input style={{width: "100%"}} className="pt-input" name="password" type="email" ref={(input) => {this.passwordInput = input}} 
            placeholder= "Password">
            </input>  
          </label>

          <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary" value="SignIn"/>
        </div>
      </div>
    );
  }
}

export default Login;


/* 
 state = {
    email: '',
    password: ''
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit=(e)=>{
    //e.preventDefalt();
    console.log(this.state)
  }
  <Button color="link" className="px-0">Forgot password?</Button>
 <Link to="/register">
 <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
</Link> */