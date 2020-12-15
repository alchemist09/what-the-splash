import { createStore, applyMiddleware, compose } from 'redux'
import createSageMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from ''

const configureStore = () => {
  const sagaMiddleware = createSageMiddleware()
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore