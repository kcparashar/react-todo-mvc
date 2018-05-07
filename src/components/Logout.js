import React from 'react'
import PropTypes from 'prop-types'

import { firebaseLogout } from '../actions'

// import { provider, auth } from '../firebase'

import GoogleButton from 'react-google-button'
// import { bindActionCreators } from 'redux'

import { connect } from 'react-redux';
// import { compose } from 'recompose';


const Logout = ({ logout }) => (

  <div>    
    <GoogleButton
      type="light" 
      label='Sign Out from Google'
      onClick={ logout }
    />
  </div>
)

Logout.propTypes = {
  logout : PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(firebaseLogout())
})

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
