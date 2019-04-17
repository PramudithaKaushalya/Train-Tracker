import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './containers/Dashboard'
//import DefaultLayout from './containers/DefaultLayout/DefaultLayout';
//import New from './New';
//import DefaultHeader from './containers/DefaultLayout/DefaultHeader';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route path='/Register' component={Register} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/' component={Login} />
            
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;