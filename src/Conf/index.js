import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDJtH_X4tDoBS8eu7LQttdII8AxhgOyEZw",
  authDomain: "ecogarden-cf997.firebaseapp.com",
  databaseURL: "https://ecogarden-cf997-default-rtdb.firebaseio.com",
  projectId: "ecogarden-cf997",
  storageBucket: "ecogarden-cf997.appspot.com",
  messagingSenderId: "271383117104",
  appId: "1:271383117104:web:749ced0f971d56298c9cf5",
  measurementId: "G-TZM8XSP8W6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);
export { database };