import { STATS } from '../constants'

function statsReducer(state={}, action) {
  if(action.type = STATS.LOAD_SUCCESS) {
    return {
      ...state,
      ...action.stats
    }
  }
  return state
}

export default statsReducer