import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'
import * as TodoActions from '../actions'
import Login from '../components/Login'
import Logout from '../components/Logout'

const App = ({ isAuthenticated }) => (
  <div>
    { isAuthenticated
        ? <SectionAuth />
        : <SectionNonAuth />
    }
  </div>
)

const SectionAuth = ({todos, actions, logout}) => (
  <div>
    <Logout />
    <Header />
    <MainSection todos={todos} actions={actions} />
  </div>
)

const SectionNonAuth = () => (
  <div>
    <Login />
  </div>
)


App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
