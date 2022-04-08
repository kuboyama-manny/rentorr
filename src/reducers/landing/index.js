import _ from 'lodash'

import * as ActionTypes from '../../utils/actionType'

const initialState = {
  isLoading: false,
  isApplicationPreview: false
}

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state)

  switch (action.type) {
    case ActionTypes.LANDING_API_LOADING:
      newState.isLoading = true
      return newState

    case ActionTypes.TOGGLE_APPLICATION_PREVIEW:
      newState.isApplicationPreview = action.payload
      return newState

    case ActionTypes.SUCCESS_CONTACT_USER:
      newState.isLoading = false
      return newState

    case ActionTypes.FAILED_LANDING_API_CALL:
      newState.isLoading = false
      return newState

    default:
      return state
  }
}

export default reducer
