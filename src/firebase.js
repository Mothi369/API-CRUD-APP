
import firebase from "firebase"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyDGZnAtz2eAV7YStxiQSHMeWOetASNF-0g",
  authDomain: "api-crud-app-be835.firebaseapp.com",
  projectId: "api-crud-app-be835",
  storageBucket: "api-crud-app-be835.appspot.com",
  messagingSenderId: "935604574019",
  appId: "1:935604574019:web:8da518337e5e63c65ac1f6"
};



firebase.initializeApp(firebaseConfig)
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()

export {auth,provider}
//export default db


/* import {initializeApp} from "firebase/app"
//import firebase from "firebase";
import {getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCmmOyZK7YSFGAzJUOc-gOuHO9Isss8-G4",
  authDomain: "api-crud-mothichandrarayal.firebaseapp.com",
  projectId: "api-crud-mothichandrarayal",
  storageBucket: "api-crud-mothichandrarayal.appspot.com",
  messagingSenderId: "214155603517",
  appId: "1:214155603517:web:110c4f2daacb0dd4470454"
};

const app=initializeApp(firebaseConfig)
export const auth=getAuth(app) */