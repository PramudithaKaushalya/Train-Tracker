export const createUser = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        
        const firestore = getFirestore();
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

export const logout = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut.then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS'});
        }).catch((err) => {
            dispatch({ type: 'LOGOUT_ERROR', err})
        })
    }
}