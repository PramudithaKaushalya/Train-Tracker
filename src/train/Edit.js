import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getFirestore} from 'redux-firestore';
import { createTrain } from '../store/action/sheduleAction';
import Collapsible from 'react-collapsible';
//import Popup from "reactjs-popup";

const loginStyle = {
  width: "50%",
  maxWidth: "500px",
  margin: "100px auto",
  border: "5px solid #ddd",
  borderRadius: "5px",
  padding: "30px"
}

class Edit extends Component {
  constructor(props){
    super(props);
 
  this.state = {
    train: '',
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
  };
  this.handleSubmit = this.handleSubmit.bind(this)
}
  handleChange=(e)=>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleUpdate=(e)=>{
    e.preventDefault();
    this.props.createTrain(this.state);
    alert("That train is updated")
    this.setState({redirectToReferrer: true})
  }

  handleDelete=(e)=>{
    e.preventDefault();
    const firestore = getFirestore();
    firestore.collection("Train").doc(this.state.train).delete().then(function() {
        alert("Document successfully deleted!");
    }).catch(function(error) {
        alert("Error removing document: ", error);
    });
    console.log("jhg")
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const train= this.state.train;
    const db = getFirestore();
    var trainRef = db.collection("Train").doc(train);
    trainRef.get().then(function(doc) {
      if (doc.exists) {
          this.setState({
            name: doc.data().Details.Name,
            type: doc.data().Details.Type,
            side: doc.data().Details.Side,
            run: doc.data().Details.RunBy,
            class: doc.data().Details.Available,
            colArr: doc.data().ColomboFort.Arr, colDep: doc.data().ColomboFort.Dep, colStop: doc.data().ColomboFort.stops,
            marArr: doc.data().Maradana.Arr, marDep: doc.data().Maradana.Dep, marStop: doc.data().Maradana.stops,
            demArr: doc.data().Dematagoda.Arr, demDep: doc.data().Dematagoda.Dep, demStop: doc.data().Dematagoda.stops,
            kelArr: doc.data().Kelaniya.Arr, kelDep: doc.data().Kelaniya.Dep, kelStop: doc.data().Kelaniya.stops,  
            wanArr: doc.data().Wanavasala.Arr, wanDep: doc.data().Wanavasala.Dep, wanStop: doc.data().Wanavasala.stops,
            hunArr: doc.data().Hunupitiya.Arr, hunDep: doc.data().Hunupitiya.Dep, hunStop: doc.data().Hunupitiya.stops,
            endArr: doc.data().Enderamulla.Arr, endDep: doc.data().Enderamulla.Dep, endStop: doc.data().Enderamulla.stops,
            horArr: doc.data().Horape.Arr, horDep: doc.data().Horape.Dep, horStop: doc.data().Horape.stops,  
            ragArr: doc.data().Ragama.Arr, ragDep: doc.data().Ragama.Dep, ragStop: doc.data().Ragama.stops,
            walArr: doc.data().Walpola.Arr, walDep: doc.data().Walpola.Dep, walStop: doc.data().Walpola.stops,
            batArr: doc.data().Batuwatte.Arr, batDep: doc.data().Batuwatte.Dep, batStop: doc.data().Batuwatte.stops,
            bulArr: doc.data().Bulugahagoda.Arr, bulDep: doc.data().Bulugahagoda.Dep, bulStop: doc.data().Bulugahagoda.stops,  
            ganArr: doc.data().Ganemulla.Arr, ganDep: doc.data().Ganemulla.Dep, ganStop: doc.data().Ganemulla.stops,
            yagArr: doc.data().Yagoda.Arr, yagDep: doc.data().Yagoda.Dep, yagStop: doc.data().Yagoda.stops,
            gamArr: doc.data().Gampaha.Arr, gamDep: doc.data().Gampaha.Dep, gamStop: doc.data().Gampaha.Arr
          })
          console.log("Document data:", this.state.name);
      } else {
          alert("No such document!");
      }
  }.bind(this)
).catch(function(error) {
      console.log("Error getting document:", error);
  });
  }
  
  render() {
    const { authError } = this.props;
   
    return (
      <div style={loginStyle} className="white">
       
        <form onSubmit={this.handleSubmit}>

          <h5>Update/ Delete</h5>
      
          <div className="input-field"> 
            <label htmlFor="train"> Train </label>  
            <input id="train" type="text" onChange={this.handleChange}/>
          </div> 
       
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Find Here</button>  
          </div>
        </form> 
        <form onSubmit={this.handleUpdate}>
          <label htmlFor="name"> Name </label>  
          <div className="input-field">  
          <input id="name" value={this.state.name} type="text" onChange={this.handleChange}/>       
          </div>
          <label htmlFor="run"> Run By </label> 
          <div className="input-field">   
          <input id="run" value={this.state.run} type="text" onChange={this.handleChange}/>       
          </div>
          <label htmlFor="side"> Side </label> 
          <div className="input-field"> 
          <input id="side" value={this.state.side} type="text" onChange={this.handleChange}/>
          </div> 
          <label htmlFor="type"> Type </label> 
          <div className="input-field">  
          <input id="type" value={this.state.type} type="text" onChange={this.handleChange}/>
          </div>
          <label htmlFor="class"> Available classes </label> 
          <div className="input-field">  
            <input id="class" value={this.state.class} type="text" onChange={this.handleChange}/>
          </div>

          <Collapsible key="col" Fort trigger="ColomboFort" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="colArr" value={this.state.colArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="colDep" value={this.state.colDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="colStop" value={this.state.colStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="mar" Fort trigger="Maradana" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="marArr" value={this.state.marArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="marDep" value={this.state.marDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="marStop" value={this.state.marStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="dem" Fort trigger="Dematagoda" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="demArr" value={this.state.demArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="demDep" value={this.state.demDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="demStop" value={this.state.demStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="kel" Fort trigger="Kelaniya" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="kelArr" value={this.state.kelArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="kelDep" value={this.state.kelDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="kelStop" value={this.state.kelStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="wan" Fort trigger="Wanavasala" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="wanArr" value={this.state.wanArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="wanDep" value={this.state.wanDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="wanStop" value={this.state.wanStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="hun" Fort trigger="Hunupitiya" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="hunArr" value={this.state.hunArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="hunDep" value={this.state.hunDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="hunStop" value={this.state.hunStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="end" Fort trigger="Enderamulla" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="endArr" value={this.state.endArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="endDep" value={this.state.endDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="endStop" value={this.state.endStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="hor" Fort trigger="Horape" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="horArr" value={this.state.horArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="horDep" value={this.state.horDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="horStop" value={this.state.horStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="rag" Fort trigger="Ragama" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="ragArr" value={this.state.ragArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="ragDep" value={this.state.ragDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="ragStop" value={this.state.ragStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="wal" Fort trigger="Walpola" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="walArr" value={this.state.walArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="walDep" value={this.state.walDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="walStop" value={this.state.walStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="bat" Fort trigger="Batuwatte" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="batArr" value={this.state.batArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="batDep" value={this.state.batDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="batStop" value={this.state.batStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="bul" Fort trigger="Bulugahagoda" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="bulArr" value={this.state.bulArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="bulDep" value={this.state.bulDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="bulStop" value={this.state.bulStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="gan" Fort trigger="Ganemulla" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="ganArr" value={this.state.ganArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="ganDep" value={this.state.ganDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="ganStop" value={this.state.ganStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>
          <Collapsible key="yag" Fort trigger="Yagoda" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="yagArr" value={this.state.yagArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="yagDep" value={this.state.yagDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="yagStop" value={this.state.yagStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible> 
          <Collapsible key="gam" Fort trigger="Gampaha" className="trigger">
            <label htmlFor="name"> Arrival Time </label>
            <div className="input-field">    
              <input id="gamArr" value={this.state.gamArr} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> Depature Time </label>
            <div className="input-field">    
              <input id="gamDep" value={this.state.gamDep} type="text" onChange={this.handleChange}/>       
            </div>
            <label htmlFor="run"> stops </label> 
            <div className="input-field">   
              <input id="gamStop" value={this.state.gamStop} type="text" onChange={this.handleChange}/>       
            </div>
          </Collapsible>                                                                                                                        
          
          
            <table>
        <tbody>
          <tr>
            <td>
            <div className="input-field">
              <button className="btn blue lighten-1 z-depth-0" >Update</button>  
            </div>
            </td>
            <td>
            <div className="input-field">   
            <button className="btn blue lighten-1 z-depth-0" onClick={this.handleDelete}>Delete</button>      
            </div>
            </td>
          </tr>
        </tbody>
      </table>
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

export default connect(null, mapDispatchToProps)(Edit);