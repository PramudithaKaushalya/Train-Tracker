import authReducer from './authReducer';
import sheduleReducer from './sheduleReducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    shedule: sheduleReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;