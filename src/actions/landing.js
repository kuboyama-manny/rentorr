import * as ActionTypes from '../utils/actionType'
import * as ApiServices from '../services/service'
import { notificationMessage } from '../utils/utilityFunctions'
import history from '../history'

export const landingApiLoading = () => ({
  type: ActionTypes.LANDING_API_LOADING
})

export const failedLandingApiCall = (error) => ({
  type: ActionTypes.FAILED_LANDING_API_CALL,
  payload: error
})

export const toggleApplicationPreview = (status) => {
  return {
    type: ActionTypes.TOGGLE_APPLICATION_PREVIEW,
    payload: status
  }
}

export const userContact = (data) => {
  return (dispatch, getState) => {
    dispatch(landingApiLoading())
    return ApiServices.contactUserService(data)
      .then(response => {
        notificationMessage('success', 'Email was sent!')
        dispatch({
          type: ActionTypes.SUCCESS_CONTACT_USER,
          payload: response.data.data
        })
      }).catch(error => {
        error.errors.map(errorItem => {
          notificationMessage('error', errorItem)
        })
        dispatch(failedLandingApiCall(error))
        history.push('/error-404')
      })
  }
}