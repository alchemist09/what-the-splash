import { IMAGES } from '../constants'

const imagesReducer = (state=[], action) => {
  if(action.type == IMAGES.LOAD_SUCCESS) {
    state = [
      ...state,
      ...action.images
    ]
    return state
  }
}

export default imagesReducer

