import _ from 'lodash'

import * as ActionTypes from '../../../utils/actionType'

const initialState = {
  isLoading: false,
  properties: [],
  property: null,
  nameSort: 1,
  dateSort: 1,
  selectedOption: 1
}

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state)

  switch (action.type) {
    case ActionTypes.LANDLORD_PROPERTIES_API_LOADING:
      newState.isLoading = true
      return newState

    case ActionTypes.FAILED_LANDLORD_PROPERTIES_API:
      newState.isLoading = false
      return newState

    case ActionTypes.SUCCESS_GET_PROPERTY:
      newState.isLoading = false
      newState.property = action.payload
      return newState

    case ActionTypes.SUCCESS_GET_PROPERTIES:
      newState.isLoading = false
      newState.properties = action.payload
      return newState

    case ActionTypes.SUCCESS_CREATE_PROPERTY:
      newState.isLoading = false
      newState.properties = action.payload
      return newState

    case ActionTypes.SUCCESS_EDIT_PROPERTY:
      newState.isLoading = false
      newState.properties = newState.properties.map(item => item._id === action.payload._id ? action.payload : item)
      return newState

    case ActionTypes.UPDATE_SORT_OPTIONS:
      newState.selectedOption = action.payload
      if (action.payload === 1) {
        newState.dateSort = 1
      } else if (action.payload === 2) {
        newState.nameSort = 1
      } else if (action.payload === 3) {
        newState.nameSort = -1
      }
      return newState

    default:
      return state
  }
}

export default reducer
