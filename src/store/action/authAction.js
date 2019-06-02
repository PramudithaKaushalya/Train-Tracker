export const createUser = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore, firebase}) => {
        
        const firestore = getFirestore();
        var userID = firebase.auth().createUser;
        console.log(userID.uid);
        firestore.collection("admin").add({
            ...user,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_USER', user});
        }).catch((err) => {
            dispatch({ type: 'CREATE_USER_ERROR', err})
        })
    }
}; 

export const register = (credentials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            
            dispatch({ type: 'REGISTRATION_SUCCESS', credentials});
        }).catch((err) => {
            dispatch({ type: 'REGISTRATION_ERROR', err})
        })
        const firestore = getFirestore();
        firestore.collection("admin").doc(credentials.email).set({
            ...credentials,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_USER', credentials});
        }).catch((err) => {
            dispatch({ type: 'CREATE_USER_ERROR', err})
        })
    }
}
export const driver = (credentials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            
            dispatch({ type: 'REGISTRATION_SUCCESS', credentials});
        }).catch((err) => {
            dispatch({ type: 'REGISTRATION_ERROR', err})
        })
        const firestore = getFirestore();
        firestore.collection("drivers").doc(credentials.email).set({
            ...credentials,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_USER', credentials});
        }).catch((err) => {
            dispatch({ type: 'CREATE_USER_ERROR', err})
        })
    }
}

export const login = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS', credentials});
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
}

export const logout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS'});
        }).catch((err) => {
            dispatch({ type: 'LOGOUT_ERROR', err});
        });
    }
}