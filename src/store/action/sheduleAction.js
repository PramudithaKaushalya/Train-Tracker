export const getdata = () => {
    return (dispatch, getState, {getFirebase, getFirestore, firebase}) => {

        const db = getFirestore();
        var train = db.collection("Train").doc("Express_Mahanuwara");

        train.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
}

export const createTrain = (train) => {
    return (dispatch, getState, {getFirebase, getFirestore, firebase}) => {
        
        const firestore = getFirestore();
        firestore.collection("Train").doc("Train 3").set({
            Details:{Name:train.name,RunBy:train.run,Side:train.side},
            ColomboFort:{Arr:train.colArr,Dep:train.colDep,stops:train.colStop},
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_USER', train});
        }).catch((err) => {
            dispatch({ type: 'CREATE_USER_ERROR', err})
        })
    }
};

export const update = (user) => {
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