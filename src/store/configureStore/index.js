import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleWare from 'redux-thunk'

import loggerMiddleware from 'redux-logger'

import isDev from 'isdev'

import RootReducer from '../../reducers'

let configureStore

// If the app is running in dev, add in redux devtools.
if (isDev) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  configureStore = initialState => {
    return createStore(
      RootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(
          thunkMiddleWare,
          loggerMiddleware
        )
      )
    )
  }
} else {
  configureStore = initialState => {
    return createStore(
      RootReducer,
      initialState,
      applyMiddleware(thunkMiddleWare)
    )
  }
}

export default configureStore
