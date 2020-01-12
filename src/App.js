import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
        <button type="button" class="btn btn-primary"onClick={signOut}>about us</button>
        <button type="button" class="btn btn-primary"onClick={signOut}>plans</button>
        <button type="button" class="btn btn-primary"onClick={signOut}>why squad up!</button>
        </header>
        <div className='tagline'>
            <p>squad up! allows you to schedule hangouts with your friends.</p>
        </div>
        <div className='subtitle'>
          <p>no fuss. no hassle.</p>
        </div>
        <div className='screen-buttons'>
        {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }

          {
            user
              ? <button type="button" class="btn btn-primary"onClick={signOut}>Sign out.</button>
              : <button type="button" class="btn btn-primary"onClick={signInWithGoogle}>Sign in with Google.</button>
          }
          
          {
            user
              ? <button type="button" class="btn btn-primary"onClick={signOut}>Sign out.</button> // this should be hidden?
              : <button type="button" class="btn btn-primary"onClick={signInWithGoogle}>Get Started.</button>
          }
        </div>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
