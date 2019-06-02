import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getFirestore} from 'redux-firestore';
import Collapsible from 'react-collapsible';
import Popup from "reactjs-popup";

const loginStyle = {
  width: "50%",
  maxWidth: "1100px",
  margin: "100px auto",
  border: "5px solid #ddd",
  borderRadius: "5px",
  padding: "30px"
}

class Edit extends Component {
  
  state = {
    train: '',
    redirectToReferrer: false,
    list: [],
    name: '',
    arr: '',
    dep: '',
    clasess: '',
    type: '',
    run: '',
    in: ''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleUpdate=(e)=>{
    const db = getFirestore();
    var up = db.collection("Train").doc("DC");

    return up.update({
      capital: true
    })
    .then(function() {
      console.log("Document successfully updated!");
    })
    .catch(function(error) {
      console.error("Error updating document: ", error);
    });
  }

  handleDelete=(e)=>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const train= this.state.train;

    const db = getFirestore();
    var trainRef = db.collection("Train").doc(train);
    trainRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  }
  
  render() {
    const { authError } = this.props;
    const m = this.state.list;
    const items = []    
    for(const [index, value] of m.entries()){
        items.push(
        <Collapsible key={index} trigger={value.title} className="trigger">
          {value.dep}<br/>
          {value.arr}<br/>
          {value.classes}<br/>
          {value.type}<br/>
          {value.run}<br/><br/>
          <Popup trigger={
          <button className="btn blue lighten-1 z-depth-0" key={index}> Update </button>
          } position="right center">
          <div> 
            <div className="input-field">  
          <label htmlFor="name"> Train Name </label>  
          <input id="name" type="text" onChange={this.handleChange}/>       
        </div>

        <div className="input-field">  
          <label htmlFor="arr"> Arrival Time</label>  
          <input id="arr" type="text" onChange={this.handleChange}/>       
        </div>

        <div className="input-field"> 
          <label htmlFor="dep"> Departure Time </label>  
          <input id="dep" type="text" onChange={this.handleChange}/>
        </div> 

        <div className="input-field"> 
          <label htmlFor="clasess"> Available Classes </label>  
          <input id="clasess" type="text" onChange={this.handleChange}/>
        </div>

        <div className="input-field"> 
          <label htmlFor="type"> Train Type </label>  
          <input id="type" type="text" onChange={this.handleChange}/>
        </div>

        <div className="input-field"> 
          <label htmlFor="run"> Run By </label>  
          <input id="run" type="text" onChange={this.handleChange}/>
        </div>

        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0" id="in" value={index} onClick={this.handleChange}>Update</button>  
        </div>
      </div>
          </Popup> <span></span>
          <button className="btn blue lighten-1 z-depth-0">Delete</button>  
                
        </Collapsible>
      )
    }
    return (
      <div style={loginStyle} className="white">
       
        <form onSubmit={this.handleSubmit}>

        <h5>Update/ Delete</h5>
        <div className="input-field">  
        </div>

        <div className="input-field"> 
          <label htmlFor="train"> Train </label>  
          <input id="train" type="text" onChange={this.handleChange}/>
        </div> 
       
        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Find Here</button>  
        </div>
        
        <div className="red-text center">
            { authError ? <p>{authError}</p>: null}
          </div>
        </form>
       {items}        
      </div>  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps)(Edit);