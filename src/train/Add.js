import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTrain } from '../store/action/sheduleAction';
import {Redirect} from 'react-router-dom';
import Collapsible from 'react-collapsible';

const loginStyle = {
  width: "90%",
  maxWidth: "500px",
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
    type: '',
    class: '',
    colArr: '', colDep: '', colStop: '',
    marArr: '', marDep: '', marStop: '',
    demArr: '', demDep: '', demStop: '',
    kelArr: '', kelDep: '', kelStop: '',  
    wanArr: '', wanDep: '', wanStop: '',
    hunArr: '', hunDep: '', hunStop: '',
    endArr: '', endDep: '', endStop: '',
    horArr: '', horDep: '', horStop: '',  
    ragArr: '', ragDep: '', ragStop: '',
    walArr: '', walDep: '', walStop: '',
    batArr: '', batDep: '', batStop: '',
    bulArr: '', bulDep: '', bulStop: '',  
    ganArr: '', ganDep: '', ganStop: '',
    yagArr: '', yagDep: '', yagStop: '',
    gamArr: '', gamDep: '', gamStop: '',
    redirectToReferrer: false
  }
 
  handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTrain(this.state);
    console.log(this.state);
    this.setState({redirectToReferrer: true});
    alert("Create Train Successfully");
    this.props.history.push('/Dashboard');
  }
  render() {
    const { authError } = this.props;
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    const {from} = this.props.location.state || {
      from: {
        pathname: '/Add'
      }
    }
    const {redirectToReferrer} = this.state
    if (redirectToReferrer && {authError}==null) {
      return (<Redirect to={from}/>)
    }
    const stations = [{arr:"colArr", dep:"colDep", stop:"colStop",name:"ColomboFort"},
                      {arr:"marArr", dep:"marDep", stop:"marStop", name:"Maradana"},
                      {arr:"demArr", dep:"demDep", stop:"demStop", name:"Dematagoda"},
                      {arr:"kelArr", dep:"kelDep", stop:"kelStop",name:"Kelaniya"},
                      {arr:"wanArr", dep:"wanDep", stop:"wanStop", name:"Wanavasala"},
                      {arr:"hunArr", dep:"hunDep", stop:"hunStop", name:"hunupitiya"},
                      {arr:"endArr", dep:"endDep", stop:"endStop",name:"Enderamulla"},
                      {arr:"horArr", dep:"horDep", stop:"horStop", name:"Horape"},
                      {arr:"ragArr", dep:"ragDep", stop:"ragStop", name:"Ragama"},
                      {arr:"walArr", dep:"walDep", stop:"walStop",name:"Walpola"},
                      {arr:"batArr", dep:"batDep", stop:"batStop", name:"Batuwatte"},
                      {arr:"bulArr", dep:"bulDep", stop:"bulStop", name:"Bulugahagoda"},
                      {arr:"ganArr", dep:"ganDep", stop:"ganStop",name:"Ganemulla"},
                      {arr:"yagArr", dep:"yagDep", stop:"yagStop", name:"Yagoda"},
                      {arr:"gamArr", dep:"gamDep", stop:"gamStop", name:"Gampaha"}] 
    const items = []    
    for(const [index, value] of stations.entries()){
        items.push(
          <Collapsible key={index} Fort trigger={value.name} className="trigger">
          <div className="input-field">  
            <label htmlFor="name"> Arrival Time </label>  
            <input id={value.arr} type="text" onChange={this.handleChange}/>       
          </div>

          <div className="input-field">  
            <label htmlFor="run"> Depature Time </label>  
            <input id={value.dep} type="text" onChange={this.handleChange}/>       
          </div>

          <div className="input-field">  
            <label htmlFor="run"> stops </label>  
            <input id={value.stop} type="text" onChange={this.handleChange}/>       
          </div>
        </Collapsible>
        )}
    return (

      <div style={loginStyle} className="white">
       
        <form onSubmit={this.handleSubmit}>

        <h5>Create New Train</h5>
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

        <div className="input-field"> 
          <label htmlFor="type"> Available classes </label>  
          <input id="class" type="text" onChange={this.handleChange}/>
        </div>

        {items} 
        
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

const mapStateToProps = (state) => {
  return{
      auth:state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createTrain: (train) => dispatch(createTrain(train))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);