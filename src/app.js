import React, { useEffect } from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import WOW from 'wow.js'

import store from './store'
import Routes from './layouts'
import history from './history'

const App = () => {
  useEffect(() => {
    const wow = new WOW()
    wow.init()
  })

  return (
    <Provider store={store}>
      <div className='app-container' style={{ overflowX: 'hidden' }}>
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    </Provider>
  )
}

export default App
