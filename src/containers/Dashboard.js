import React, { Component } from 'react';
import Train from '../t1.jpg';

class Dashboard extends Component {
  render(){
    return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
            <br/>
            <img src={Train} alt="Logo" height='650px' width='1100px'/>
            </div>
          </div> 
        </div>
    )
  }
}

export default Dashboard;