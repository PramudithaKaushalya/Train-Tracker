import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyDin3Ah4eMirhFDz0eizFjGRx03C1v2IMo",
  authDomain: "shareplaces-5a4c6.firebaseapp.com",
  databaseURL: "https://shareplaces-5a4c6.firebaseio.com",
  projectId: "shareplaces-5a4c6",
  storageBucket: "shareplaces-5a4c6.appspot.com",
  messagingSenderId: "316261499606"
};

  const fbConfig = firebase.initializeApp(config);
  //firebase.firestore().settings({ timestampsInSnapshots: true});

  export default fbConfig;