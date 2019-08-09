import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import Login from './auth/Login';
import Register from './auth/Register';
import Driver from './auth/Register/Driver';
import Dashboard from './containers/Dashboard';
import Edit from './train/Edit';
import Search from './train/Search';
import Add from './train/Add';
import Notifications from './Messages/createmessage';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route path='/Driver' component={Driver} />
            <Route path='/Register' component={Register} />
            <Route path='/Add' component={Add} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/Search' component={Search} />
            <Route path='/Edit' component={Edit} />
            <Route path='/Notifications' component={Notifications} />
            <Route path='/' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;