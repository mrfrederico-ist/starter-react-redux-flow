/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import logoSpeed from './reducers/logoAnimation'

import registerServiceWorker from './utils/registerServiceWorker'

import type { Store } from './types'

const store: Store = createStore(
  logoSpeed,
  { animationDuration: 5 },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
