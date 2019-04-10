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

 
  // firebase.initializeApp(config);

  // var config = {
  //   apiKey: "AIzaSyAW1bd_wUKCTVXsWoi_Wn39c1HaNX-aX1c",
  //   authDomain: "train-tracker-232105.firebaseapp.com",
  //   databaseURL: "https://train-tracker-232105.firebaseio.com",
  //   projectId: "train-tracker-232105",
  //   storageBucket: "train-tracker-232105.appspot.com",
  //   messagingSenderId: "939799566101"
  // };