// firebaseConfig.js
import {initializeApp,getApps} from 'firebase/app'
import { getDatabase } from 'firebase/database';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLl8W6RiJb6Qnqzk6qZtZf8YnLZZQ6boA",
  authDomain: "loginfpt-a3806.firebaseapp.com",
  databaseURL: "https://loginfpt-a3806-default-rtdb.firebaseio.com",
  projectId: "loginfpt-a3806",
  storageBucket: "loginfpt-a3806.appspot.com",
  messagingSenderId: "961082754143",
  appId: "1:961082754143:web:b0d39f49e03926eb06c7ea",
  measurementId: "G-LS6NJN4FMC"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; 
}

const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth };

//Android: 340177214409-lj9scb163sa9blbivk8tu99spsnbh9dd.apps.googleusercontent.com