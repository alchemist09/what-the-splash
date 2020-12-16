import { combineReducers } from 'redux'
import loadingReducer from './loading_reducer'
import imagesReducer from './images_reducer'
import errorReducer from './error_reducer'
import pageReducer from './page_reducer'

const rootReducer = combineReducers({
  loading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  nextPage: pageReducer
})

export default rootReducer