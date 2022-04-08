import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { changeLoginState } from '../actions/auth'

const LandlordRoute = (props) => {
  if (props.isAuthenticated()) {
    if (!props.isLoggedIn && props.changeLoginState) props.changeLoginState(true)
    if (props.role === 'LANDLORD') {
      return <Route {...props} component={props.component} />
    }
    return <Redirect to={{ pathname: '/error-404' }} />
  }
  if (props.isLoggedIn) props.changeLoginState(false)
  return <Redirect to={{ pathname: '/' }} />
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLoginState: (isLoggedIn) => {
      dispatch(changeLoginState(isLoggedIn))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandlordRoute)
