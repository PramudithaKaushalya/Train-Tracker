import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './containers/Dashboard';
//import Shedule from './train/Shedule';
import Search from './train/Search';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route path='/Register' component={Register} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/Search' component={Search} />
            <Route path='/' component={Login} />
            
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;