export const getdata = (train) => {
    return (dispatch, getState, {getFirebase, getFirestore, firebase}) => {

        const db = getFirestore();
        var find = db.collection("Train").doc("Express_Mahanuwara");

        find.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
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
        let except= train.except.split('');
        let i = 0;
        for(i=0; i<except.length; i++){
            let x;
            x= parseInt(except[i]);
            except[i]=x;
        }
        firestore.collection("Train").doc(train.colArr).set({
            Details:{Name:train.name,RunBy:train.run,Side:train.side,Type:train.type,Available:train.class,RunByExcept:except},
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
            Batuwatte:{Arr:train.batArr,Dep:train.batDep,stops:train.batStop},
            Bulugahagoda:{Arr:train.bulArr,Dep:train.bulDep,stops:train.bulStop},
            Ganemulla:{Arr:train.ganArr,Dep:train.ganDep,stops:train.ganStop},
            Yagoda:{Arr:train.yagArr,Dep:train.yagDep,stops:train.yagStop},
            Gampaha:{Arr:train.gamArr,Dep:train.gamDep,stops:train.gamStop},
            lat:6.9331195,
            lng:79.847847,
            time:1565765415000,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TRAIN', train});
        }).catch((err) => {
            dispatch({ type: 'CREATE_TRAIN_ERROR', err})
        })
    }
};

export const update = (train) => {
    return (dispatch, getState, {getFirebase, getFirestore, firebase}) => {
        
       
    }
}; 