import React, { Component} from 'react';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import logo from './logo.png';
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
        <div className='dark-rec'></div>
        <div className='light-rec'></div>

      <Router>
      <div>
      <header className="App-header">
        <button type="button" class="btn btn-primary"><Link to='/signUp'>about us</Link></button>
        <button type="button" class="btn btn-primary"><Link to='/about'>plans</Link></button>
        <button type="button" class="btn btn-primary"><Link to='/signUp'>why squad up!</Link></button>
        <img src={logo} />
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
              : <button type="button" class="btn btn-primary"onClick={signInWithGoogle}>Sign in.</button>
          }
          
          {
            user
              ? <button type="button" class="btn btn-primary"onClick={signOut}>Sign out.</button> // this should be hidden?
              : <button type="button" class="btn btn-primary"><Link to='/signUp'>Get Started.</Link></button>
          }
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
{/*
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
              : <button type="button" class="btn btn-primary"onClick={signInWithGoogle}>Sign in.</button>
          }
          
          {
            user
              ? <button type="button" class="btn btn-primary"onClick={signOut}>Sign out.</button> // this should be hidden?
              : <button type="button" class="btn btn-primary" onClick={signUp()}><Router><Link to='/signUp'>Get Started.</Link></Router></button>
          }
        </div>
        */}
      </div>
    );
  }
}

function Home() {
  return (
    <div>

    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function SignUp() {

  return (
    
    <div>
      <div className='white-out'></div>
      <form className='form-wrap'>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">first name</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="first name"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">last name</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="last name"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail4">email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="email"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="username">username</label>
      <input type="text" class="form-control" id="username" placeholder='username'></input>
    </div>
    <div class="form-group col-md-6">
      <label for="password">password</label>
      <input type="text" class="form-control" id="password" placeholder='password'></input>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        By checking this box, you agree to our <strong>Terms of Service</strong>, <strong>Privacy Policy</strong>, and <strong>Notification Settings</strong>.
      </label>
    </div>
  </div>
  {/* <button type="button" class="btn btn-primary"onClick={signInWithGoogle}>Sign up with Google.</button> */}
  <button type="submit" class="btn btn-primary">Create Profile</button>
</form>
    </div>
  )
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
