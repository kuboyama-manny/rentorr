import * as ActionTypes from '../utils/actionType'
import * as ApiServices from '../services/service'
import { notificationMessage } from '../utils/utilityFunctions'
import history from '../history'
import { auth } from '../layouts/auth'

export const authApiLoading = () => ({
  type: ActionTypes.AUTH_API_LOADING
})

export const failedApiCall = (error) => ({
  type: ActionTypes.FAILED_AUTH_API,
  payload: error
})

export const setModalMode = (mode) => {
  return {
    type: ActionTypes.SET_MODAL_MODE,
    payload: mode
  }
}

export const changeLoginState = (isLoggedIn) => {
  return {
    type: ActionTypes.CHANGE_LOGIN_STATE,
    payload: isLoggedIn
  }
}

export const verifyEmail = (data) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading)
    return ApiServices.verifyEmailService(data)
      .then(response => {
        notificationMessage('success', 'Email was verified!')
        auth.handleAuthentication(response.data.data)
        dispatch({
          type: ActionTypes.SUCCESS_VERIFY_EMAIL,
          payload: response.data.data
        })
      }).catch(error => {
        error.errors.map(errorItem => {
          notificationMessage('error', errorItem)
        })
        dispatch(failedApiCall(error))
        history.push('/')
      })
  }
}

export const signUp = (data) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading())
    return ApiServices.signUpService(data)
      .then(response => {
        notificationMessage('success', 'The user was signed up successfully!')
        dispatch({
          type: ActionTypes.SUCCESS_SIGN_UP,
          payload: response.data.data
        })
      }).catch(error => {
        error.errors.map(errorItem => {
          notificationMessage('error', errorItem)
        })
        dispatch(failedApiCall(error))
        history.push('/')
      })
  }
}

export const login = (data, loginType = 'email') => {
  return (dispatch, getState) => {
    dispatch(authApiLoading())
    return ApiServices.loginService(data, loginType)
      .then(response => {
        notificationMessage('success', 'The user logged in successfully!')
        auth.handleAuthentication(response.data.data)
        dispatch({
          type: ActionTypes.SUCCESS_LOGIN,
          payload: response.data.data
        })
        if (auth.getRole() === 'LANDLORD') history.push('/landlord')
        if (auth.getRole() === 'TENANT') history.push('/tenant')
      }).catch(error => {
        error.errors.map(errorItem => {
          notificationMessage('error', errorItem)
        })
        dispatch(failedApiCall(error))
        history.push('/')
      })
  }
}

export const setUserRole = (data) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading())
    return ApiServices.setUserRoleService(data)
      .then(response => {
        notificationMessage('success', 'The user was set successfully!')
        dispatch({
          type: ActionTypes.SUCCESS_SELECT_ROLE,
          payload: response.data.data
        })
        auth.saveUserRole(response.data.data)
      }).catch(error => {
        error.errors.map(errorItem => {
          notificationMessage('error', errorItem)
        })
        dispatch(failedApiCall(error))
      })
  }
}

export const resendEmail = (data) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading())
    return ApiServices.resendEmailService(data)
      .then(response => {
        notificationMessage('success', 'The email was resent again!')
        dispatch({
          type: ActionTypes.SUCCESS_RESEND_EMAIL,
          payload: response.data.data
        })
      }).catch(error => {
        error.errors.map(errorItem => {
          notificationMessage('error', errorItem)
        })
        dispatch(failedApiCall(error))
      })
  }
}

export const forgotPassword = (data) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading())
    return ApiServices.forgotPasswordService(data)
      .then(response => {
        notificationMessage('success', 'The email was sent correctly!')
        dispatch({
          type: ActionTypes.SUCCESS_FORGOT_PASSWORD,
          payload: response.data.data
        })
      }).catch(error => {
        error.errors.map(errorItem => {
          notificationMessage('error', errorItem)
        })
        dispatch(failedApiCall(error))
      })
  }
}
