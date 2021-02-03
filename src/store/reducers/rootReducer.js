import {combineReducers} from 'redux'
import {
    firebaseReducer
  } from 'react-redux-firebase'

import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

// Add firebase to reducers

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  })

export default rootReducer;