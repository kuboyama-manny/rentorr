import { combineReducers } from 'redux'

import auth from './auth'
import landing from './landing'
import landlord from './landlord'

const RootReducer = combineReducers({
  auth: auth,
  landing: landing,
  landlord: landlord
})

export default RootReducer
