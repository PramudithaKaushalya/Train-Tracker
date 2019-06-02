import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTrain } from '../store/action/sheduleAction';
import {Redirect} from 'react-router-dom';
import Collapsible from 'react-collapsible';
//import Dropdown from 'react-dropdown';
//import 'react-dropdown/style.css';

const loginStyle = {
  width: "90%",
  maxWidth: "315px",
  margin: "100px auto",
  border: "5px solid #ddd",
  borderRadius: "5px",
  padding: "30px"
}

class Add extends Component {
  state = {
    
      name: '',
      run: '',
      side: '',
      colArr: '',
      colDep: '',
      colStop: '',
    redirectToReferrer: false
  }
 
  handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
    console.log("kjhkyg",e.target.value)
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
   
    this.props.createTrain(this.state);
    console.log(this.state)
    this.setState({redirectToReferrer: true})
    
  }
  render() {
    const { authError } = this.props;
    const {from} = this.props.location.state || {
      from: {
        pathname: '/Add'
      }
    }
    const {redirectToReferrer} = this.state
    if (redirectToReferrer && {authError}==null) {
      return (<Redirect to={from}/>)
    }

    return (

      <div style={loginStyle}>
       
        <form onSubmit={this.handleSubmit}>

        <h5>Add Details</h5>
        <div className="input-field">  
          <label htmlFor="name"> Name </label>  
          <input id="name" type="text" onChange={this.handleChange}/>       
        </div>

        <div className="input-field">  
          <label htmlFor="run"> Run By </label>  
          <input id="run" type="text" onChange={this.handleChange}/>       
        </div>

        <div className="input-field"> 
          <label htmlFor="side"> Side </label>  
          <input id="side" type="text" onChange={this.handleChange}/>
        </div> 

        <div className="input-field"> 
          <label htmlFor="type"> Type </label>  
          <input id="type" type="text" onChange={this.handleChange}/>
        </div>
        
        <Collapsible key="Fort" Fort trigger="Colombo Fort" className="trigger">
          <div className="input-field">  
            <label htmlFor="name"> Arrival Time </label>  
            <input id="colArr" type="text" onChange={this.handleChange}/>       
          </div>

          <div className="input-field">  
            <label htmlFor="run"> Depature Time </label>  
            <input id="colDep" type="text" onChange={this.handleChange}/>       
          </div>

          <div className="input-field">  
            <label htmlFor="run"> stops </label>  
            <input id="colStop" type="text" onChange={this.handleChange}/>       
          </div>
        </Collapsible>
              
        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Add</button>  
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
    createTrain: (train) => dispatch(createTrain(train))
  }
}

export default connect(null, mapDispatchToProps)(Add);