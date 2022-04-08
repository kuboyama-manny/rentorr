import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import queryString from 'query-string'

import MainLoader from '../../common/wrappers/loadingWrapper/mainLoader'

import { verifyEmail } from '../../../actions/auth'

class VerifyEmailContainer extends Component {
  constructor (props) {
    super(props)

    this.handleVerification = this.handleVerification.bind(this)
  }

  componentDidMount () {
    const { location } = this.props
    const params = queryString.parse(location.search)
    if (params && params.token) {
      this.handleVerification(location)
    }
  }

  handleVerification (location) {
    const params = queryString.parse(location.search)
    this.props.verifyEmail({ token: params.token })
  }

  render () {
    return <MainLoader isVisible />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    verifyEmail: (data) => {
      dispatch(verifyEmail(data))
    }
  }
}

export default withRouter(
  connect(
    '',
    mapDispatchToProps
  )(VerifyEmailContainer)
)
