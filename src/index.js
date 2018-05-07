import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import 'todomvc-app-css/index.css'

import store from './store';

import * as firebase from "firebase";

import { userSignIn, userSignOut } from './actions'


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        store.dispatch(userSignIn(user.uid))
    } else {
        store.dispatch(userSignOut())
    }
});