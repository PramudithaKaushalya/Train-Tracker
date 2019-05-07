import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getFirestore} from 'redux-firestore';
import Collapsible from 'react-collapsible';

const loginStyle = {
  width: "50%",
  maxWidth: "1100px",
  margin: "100px auto",
  border: "5px solid #ddd",
  borderRadius: "5px",
  padding: "30px"
}

class Search extends Component {
  
  state = {
    from: '',
    to: '',
    redirectToReferrer: false,
    name: '',
    list: []
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }


  handleSubmit=(e)=>{
    e.preventDefault();
    const to= this.state.to;
    const from= this.state.from;
    console.log("From: " + from, "To: " + to);

    const db = getFirestore();
    var trainRef = db.collection("Train");
    var query = trainRef.where(to+".stops", "==" ,"true").where(from+".stops", "==" ,"true")
    let object;
    let key = 0;

    query.get().then(snapshot=>{
            
      snapshot.docs.forEach(doc=>{
        this.setState({
          name:doc.data().Details.Name
        })
       
        object = {  key : key.toString(),
                    title : doc.get('Details.Name'), 
                    description : 'Departure from '+ from +' : '+ doc.get(from +'.Dep') +'\n'+
                                  'Arrival at '    + to   +' : '+ doc.get(to+'.Arr')   +'\n'+                                             
                                  'Available Classes'   +  doc.get('Details.Type')
        }
        this.setState(prevState => ({
          list: [...prevState.list , object]
        }))
        // this.setState(prevState=>{
        //   return{
        //     list:prevState.list.push(object1)
        //   }
        // })
        //this.state.list.push(object1)
        key++
        
      })
    })
    console.log(this.state.list);
  }
  
  render() {
    const { authError } = this.props;
   
    const list2 =[]
    const list3 = this.state.list
    const len = list3.length
    for (let i=0; i<len;i++){
      list2.push(
      <Collapsible trigger={list3} className="trigger">
      <p>It can even bext section!</p>
      </Collapsible>
      )
    }
    return (
      <div>
      <div style={loginStyle} className="white">
       
        <form onSubmit={this.handleSubmit}>

        <h5>SHEDULE</h5>
        <div className="input-field">  
        </div>

        <div className="input-field"> 
          <label htmlFor="from">From </label>  
          <input id="from" type="text" ref="from" onChange={this.handleChange}/>
        </div> 
        <div className="input-field"> 
          <label htmlFor="to">To </label>  
          <input id="to" type="text" ref="to" onChange={this.handleChange}/>
        </div> 
        <div className="input-field">
          <button className="btn blue lighten-1 z-depth-0">Search Here</button>  
        </div>
        
        <div className="red-text center">
            { authError ? <p>{authError}</p>: null}
          </div>
        </form>
            {list2}
        
        
      </div>  <br/>
      <div style={loginStyle} className="white">
       
      
       
     </div>  
      </div>
    );

    
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}


export default connect(mapStateToProps)(Search);