import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router'
import { Router } from './components/router'

import App from './App';
// import Two from './Two';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBEV_nobmOnrlLgx4dq34U5X2ZeV7H4BNE",
  authDomain: "draw-6bba6.firebaseapp.com",
  databaseURL: "https://draw-6bba6.firebaseio.com",
  storageBucket: "draw-6bba6.appspot.com",
  messagingSenderId: "393848162065"
};
//  firebase.initializeApp(config);

const fb = firebase
  .initializeApp(config)
  .database()
  .ref();

// Add some "action" functions
// These will update our firebase database
const addLocation = data => fb.child('locations').push(data, response => response);
const updateLocation = (id, data) => fb.child(`locations/${id}`).update(data, response => response);
const addTeam = data => fb.child('teams').push(data, response => response);
const updateTeam = (id, data) => fb.child(`teams/${id}`).update(data, response => response);
const actions = {
  addLocation,
  updateLocation,
  addTeam,
  updateTeam
};

fb.on('value', snapshot => {
  const store = snapshot.val();
  ReactDOM.render(
    <Router>
        <App {...actions}{...store} />
    </Router>,
    document.getElementById('root')
  );
});

    // <Router history={browserHistory}>
    //     <Route path="/" component={() => (<App {...actions}{...store} />)} />
    //     <Route path="/two" component={() => (<Two {...store} />)} />
    // </Router>,