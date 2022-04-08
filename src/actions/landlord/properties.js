import * as ActionTypes from '../../utils/actionType'
import * as ApiServices from '../../services/service'
import { notificationMessage } from '../../utils/utilityFunctions'
import history from '../../history'

export const landlordPropertiesApiLoading = () => ({
  type: ActionTypes.LANDLORD_PROPERTIES_API_LOADING
})

export const failedLandlordPropertiesApiCall = () => ({
  type: ActionTypes.FAILED_LANDLORD_PROPERTIES_API
})

export const getProperty = (id) => {
  return (dispatch, getState) => {
    dispatch(landlordPropertiesApiLoading())
    return ApiServices.getProperty(id)
      .then(response => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_PROPERTY,
          payload: response.data.data[0]
        })
      }).catch(error => {
        // error.errors.map(errorItem => {
        //   notificationMessage('error', errorItem)
        // })
        dispatch(failedLandlordPropertiesApiCall(error))
      })
  }
}

export const getProperties = () => {
  return (dispatch, getState) => {
    const getSortOptions = () => {
      return {
        name: getState().landlord.properties.nameSort,
        createdAt: getState().landlord.properties.dateSort
      }
    }
    dispatch(landlordPropertiesApiLoading())
    return ApiServices.getProperties(getSortOptions())
      .then(response => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_PROPERTIES,
          payload: response.data.data
        })
      }).catch(error => {
        error.errors.map(errorItem => {
          notificationMessage('error', errorItem)
        })
        dispatch(failedLandlordPropertiesApiCall())
      })
  }
}

export const updateSortOptions = (value) => {
  return {
    type: ActionTypes.UPDATE_SORT_OPTIONS,
    payload: value
  }
}

export const createProperty = (data) => {
  return (dispatch, getState) => {
    dispatch(landlordPropertiesApiLoading())
    return ApiServices.createPropertyService(data)
      .then(response => {
        dispatch({
          type: ActionTypes.SUCCESS_CREATE_PROPERTY,
          payload: response.body.data
        })
        history.push('/landlord/properties')
      }).catch(error => {
        // error.errors.map(errorItem => {
        //   notificationMessage('error', errorItem)
        // })
        dispatch(failedLandlordPropertiesApiCall(error))
      })
  }
}

export const editProperty = (id, data) => {
  return (dispatch, getState) => {
    dispatch(landlordPropertiesApiLoading())
    return ApiServices.editPropertyService(id, data)
      .then(response => {
        dispatch({
          type: ActionTypes.SUCCESS_EDIT_PROPERTY,
          payload: response.body.data
        })
      }).catch(error => {
        // error.errors.map(errorItem => {
        //   notificationMessage('error', errorItem)
        // })
        dispatch(failedLandlordPropertiesApiCall(error))
      })
  }
}
