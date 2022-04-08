import * as ActionTypes from '../../utils/actionType'
import * as ApiServices from '../../services/service'
import { notificationMessage } from '../../utils/utilityFunctions'
// import history from '../../../history'

export const landlordListingsApiLoading = () => ({
  type: ActionTypes.LANDLORD_LISTINGS_API_LOADING
})

export const failedLandlordListingsApiCall = () => ({
  type: ActionTypes.FAILED_LANDLORD_LISTINGS_API
})

export const getListings = () => {
  return (dispatch, getState) => {
    dispatch(landlordListingsApiLoading())
    return ApiServices.getLandlordListingsService()
      .then(response => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_LANDLORD_LISTINGS,
          payload: response.data.data
        })
      }).catch(error => {
        error.errors.map(errorItem => {
          notificationMessage('error', errorItem)
        })
        dispatch(failedLandlordListingsApiCall(error))
      })
  }
}
