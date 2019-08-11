import authReducer from './authReducer';
import sheduleReducer from './sheduleReducer';
import messageReducer from './messageReducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    shedule: sheduleReducer,
    message: messageReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;