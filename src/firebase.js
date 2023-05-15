import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6rJG5R1Q_vX15JTfTbJlo9stNKvIqmSE",
    authDomain: "satish-my-social-media-app.firebaseapp.com",
    projectId: "satish-my-social-media-app",
    storageBucket: "satish-my-social-media-app.appspot.com",
    messagingSenderId: "105332026124",
    appId: "1:105332026124:web:276c357da9e7f21e89b729"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
//export const db = firebase.firestore()
//const auth = firebase.auth()

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default auth