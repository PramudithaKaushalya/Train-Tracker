import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import authReducer from './reducers/authReducer';
import { Provider } from 'react-redux';
//import Location from './Location';
//import Login from './auth/Login/Login';

const store = createStore(authReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
  