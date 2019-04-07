import React, { Component } from 'react';

const loginStyle = {
  width: "90%",
  maxWidth: "315px",
  margin: "100px auto",
  border: "5px solid #ddd",
  borderRadius: "5px",
  padding: "30px"
}

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state)
  }
  
  render() {
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
        </form>
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