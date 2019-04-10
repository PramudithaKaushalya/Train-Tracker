import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import Login from './auth/Login';
import Register from './auth/Register';
//import New from './New';
//import DefaultHeader from './containers/DefaultLayout/DefaultHeader';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <br/>
          <Login/>
          <Switch>
            <Route exact path='/Login' Component={Login} />
            <Route path='/Register' Component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;