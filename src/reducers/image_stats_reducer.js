import { IMAGE_STATS } from '../constants'

function imageStatsReducer(state={}, action) {
  switch(action.type) {
    case IMAGE_STATS.LOAD:
      return {
        ...state,
        [action.id]: {
          loading: true,
          payload: null,
          error: null
        }
      }
    
    case IMAGE_STATS.LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          loading: false,
          payload: {
            downloads: action.payload.downloads,
            likes: action.payload.likes,
            views: action.payload.views
          },
          error: null
        }
      }

    case IMAGE_STATS.LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          loading: false,
          payload: null,
          error: action.error
        } 
      }

    default:
      return state
  }
}

export default imageStatsReducer