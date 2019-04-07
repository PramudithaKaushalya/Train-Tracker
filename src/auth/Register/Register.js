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
  state = {
    name: '',
    email: '',
    password: ''
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit=(e)=>{
    //e.preventDefalt();
    console.log(this.state)
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
          <label htmlFor="password"> Confirm Password </label>  
          <input id="cpassword" type="password" onChange={this.handleChange}/>
        </div>

        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Sign In</button>  
        </div>
        </form>
      </div>
    );
  }
}

export default Login;


/* 
  <Button color="link" className="px-0">Forgot password?</Button>
 <Link to="/register">
 <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
</Link> */