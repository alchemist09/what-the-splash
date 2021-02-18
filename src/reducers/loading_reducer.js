import { IMAGES, STATS } from '../constants'

const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case IMAGES.LOAD:
    case STATS.LOAD:
      return true
    case IMAGES.LOAD_SUCCESS:
    case STATS.LOAD_SUCCESS:
      return false
    case IMAGES.LOAD_FAIL:
    case STATS.LOAD_FAIL:
      return false
    default:
      return state
  }
}

export default loadingReducer