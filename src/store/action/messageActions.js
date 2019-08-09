export const createMessage = (message) =>{
    return(dispatch,getState,{ getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        //const profile = getState().firebase.profile; author: profile.firstName,
        const adminId = getState().firebase.auth.uid;
        firestore.collection('messages').add({
            ...message,
            adminId:adminId,
            createdOn : new Date()
        }).then(() =>{
            dispatch({type:'CREATE_MESSAGE',message});
        }).catch((err) =>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
            
        }) 
    }
};

 