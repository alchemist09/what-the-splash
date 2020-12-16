import { createStore, applyMiddleware, compose } from 'redux'
import createSageMiddleware from 'redux-saga'
// import { IMAGES } from '../constants'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

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
  // store.dispatch({ type: 'LOGOUT' })
  // store.dispatch({ type: 'LOGIN' })
  // store.dispatch({ type: 'LOGOUT' })
  // store.dispatch({ type: IMAGES.LOAD })
  // store.dispatch({ type: 'CHANT' })
  return store
}

export default configureStore