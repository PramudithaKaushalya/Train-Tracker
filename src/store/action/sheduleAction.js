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
        firestore.collection("Train").doc(train.name).set({
            Details:{Name:train.name,RunBy:train.run,Side:train.side},
            ColomboFort:{Arr:train.colArr,Dep:train.colDep,stops:train.colStop},
            Maradana:{Arr:train.marArr,Dep:train.marDep,stops:train.marStop},
            Dematagoda:{Arr:train.demArr,Dep:train.demDep,stops:train.demStop},
            Kelaniya:{Arr:train.kelArr,Dep:train.kelDep,stops:train.kelStop},
            Wanavasala:{Arr:train.wanArr,Dep:train.wanDep,stops:train.wanStop},
            Hunupitiya:{Arr:train.hunArr,Dep:train.hunDep,stops:train.hunStop},
            Enderamulla:{Arr:train.endArr,Dep:train.endDep,stops:train.endStop},
            Horape:{Arr:train.horArr,Dep:train.horDep,stops:train.horStop},
            Ragama:{Arr:train.ragArr,Dep:train.ragDep,stops:train.ragStop},
            Walpola:{Arr:train.walArr,Dep:train.walDep,stops:train.walStop},
            Batuatte:{Arr:train.batArr,Dep:train.batDep,stops:train.batStop},
            Bulugahagoda:{Arr:train.bulArr,Dep:train.bulDep,stops:train.bulStop},
            Ganemulla:{Arr:train.ganArr,Dep:train.ganDep,stops:train.ganStop},
            Yagoda:{Arr:train.yagArr,Dep:train.yagDep,stops:train.yagStop},
            Gampaha:{Arr:train.gamArr,Dep:train.gamDep,stops:train.gamStop},
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TRAIN', train});
        }).catch((err) => {
            dispatch({ type: 'CREATE_TRAIN_ERROR', err})
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