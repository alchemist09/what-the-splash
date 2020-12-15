import { combineReducers } from 'redux'
import loadingReducer from './loading_reducer'
import imagesReducer from './images_reducer'
import errorReducer from './error_reducer'

const rootReducer = combineReducers({
  loading: loadingReducer,
  images: imagesReducer,
  error: errorReducer
})

export default rootReducer