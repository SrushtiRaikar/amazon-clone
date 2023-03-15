// //import firebase from "firebase";
// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyC4TdDKyWK0ycvvYZ7Q17eHJ5L-Pdh92wg",
//   authDomain: "clone-4d0c3.firebaseapp.com",
//   projectId: "clone-4d0c3",
//   storageBucket: "clone-4d0c3.appspot.com",
//   messagingSenderId: "227473287221",
//   appId: "1:227473287221:web:60f35cae7586e69ab4697c",
//   measurementId: "G-SS06VW9E6T"
// };

// const firebaseApp= firebase.initializeApp(firebaseConfig);

// const db= firebaseApp.firestore();


// const auth=firebase.auth();

// export {db, auth}


import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
//import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4TdDKyWK0ycvvYZ7Q17eHJ5L-Pdh92wg",
  authDomain: "clone-4d0c3.firebaseapp.com",
  projectId: "clone-4d0c3",
  storageBucket: "clone-4d0c3.appspot.com",
  messagingSenderId: "227473287221",
  appId: "1:227473287221:web:60f35cae7586e69ab4697c",
  measurementId: "G-SS06VW9E6T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

export { db, auth, storage };