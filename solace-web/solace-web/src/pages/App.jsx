import React from 'react'
import './App.css'
//set up firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const App = () => {
  return (
    <div className='main'>
      <h1>Welcome to Solace</h1>
      <h2>Where you can find peace and tranquility</h2>
    </div>
  )
}

export default App