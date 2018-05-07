import React from 'react'

import { firebaseLogin } from '../actions'

// import { provider, auth } from '../firebase'

import GoogleButton from 'react-google-button'
// import { bindActionCreators } from 'redux'

import { connect } from 'react-redux';
// import { compose } from 'recompose';


const Login = ({ login }) => (
  <div>
    <header className="header">
    <h1>todos</h1>
    </header>

    <GoogleButton
      onClick={ login }
    />
  </div>
)

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(firebaseLogin())
})

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
