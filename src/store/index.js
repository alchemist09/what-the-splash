import { createStore } from 'redux'

import rootReducer from '../reducers'

const configureStore = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
  )
}

export { configureStore }