import { combineReducers } from 'redux'

import listings from './listings'
import properties from './properties'

const RootReducer = combineReducers({
  listings: listings,
  properties: properties
})

export default RootReducer
