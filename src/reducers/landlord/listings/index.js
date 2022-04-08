import _ from 'lodash'

import * as ActionTypes from '../../../utils/actionType'

const initialState = {
  isLoading: false
}

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state)

  switch (action.type) {
    case ActionTypes.LANDLORD_LISTINGS_API_LOADING:
      newState.isLoading = true
      return newState

    case ActionTypes.FAILED_LANDLORD_LISTINGS_API:
      newState.isLoading = false
      return newState

    case ActionTypes.SUCCESS_GET_LANDLORD_LISTINGS:
      newState.isLoading = false
      return newState

    default:
      return state
  }
}

export default reducer
