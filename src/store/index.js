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

  const taskObject = sagaMiddleware.run(rootSaga)
  console.log("TASK OBJECT")
  console.log(taskObject)
  console.log("isRunning(): ",  taskObject.isRunning())
  // taskObject.cancel()
  // console.log("isRunning() after canceling: ",  taskObject.isRunning())
  console.log("result(): ", taskObject.result())
  // setTimeout(() => {
  //   console.log("isRunning() after 30 seconds: ", taskObject.isRunning())
  // }, 30000)
  // store.dispatch({ type: 'LOGOUT' })
  // store.dispatch({ type: 'LOGIN' })
  // store.dispatch({ type: 'LOGOUT' })
  // store.dispatch({ type: IMAGES.LOAD })
  // store.dispatch({ type: 'CHANT' })
  return store
}

export default configureStore