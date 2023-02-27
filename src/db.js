import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHMHihtTWR1ShKbnvvfSiXgYW9-6hmLlk",
  authDomain: "webchat-3ed4d.firebaseapp.com",
  projectId: "webchat-3ed4d",
  storageBucket: "webchat-3ed4d.appspot.com",
  messagingSenderId: "478078899146",
  appId: "1:478078899146:web:eca874fb95f70ee5293533"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }