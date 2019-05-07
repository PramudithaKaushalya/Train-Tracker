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