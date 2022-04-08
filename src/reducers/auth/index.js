import _ from 'lodash'

import * as ActionTypes from '../../utils/actionType'

const initialState = {
  isLoading: false,
  isModalMode: '',
  isLoggedIn: false,
  signUpEmail: ''
}

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state)

  switch (action.type) {
    case ActionTypes.AUTH_API_LOADING:
      newState.isLoading = true
      return newState

    case ActionTypes.SET_MODAL_MODE:
      newState.isModalMode = action.payload
      return newState

    case ActionTypes.CHANGE_LOGIN_STATE:
      newState.isLoggedIn = action.payload
      return newState

    case ActionTypes.SUCCESS_SIGN_UP:
      newState.isLoading = false
      newState.isModalMode = 'check_email'
      newState.signUpEmail = action.payload.email
      return newState

    case ActionTypes.SUCCESS_RESEND_EMAIL:
      newState.isLoading = false
      newState.isModalMode = ''
      return newState

    case ActionTypes.SUCCESS_VERIFY_EMAIL:
      newState.isLoading = false
      newState.isModalMode = 'select_role'
      return newState

    case ActionTypes.SUCCESS_LOGIN:
      newState.isLoading = false
      newState.isModalMode = ''
      return newState

    case ActionTypes.SUCCESS_SELECT_ROLE:
      newState.isLoading = false
      newState.isModalMode = ''
      return newState

    case ActionTypes.SUCCESS_FORGOT_PASSWORD:
      newState.isLoading = false
      newState.isModalMode = ''
      return newState

    case ActionTypes.FAILED_AUTH_API:
      newState.isLoading = false
      newState.isModalMode = ''
      return newState

    default:
      return state
  }
}

export default reducer
