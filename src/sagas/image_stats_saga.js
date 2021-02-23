import { IMAGES } from '../constants'
import { take, fork } from 'redux-saga/effects'

function* handleImageStatsLoad(id) {
  console.log(`handle stats request for image ${id}`)
}

function* watchImageStatsLoad() {
  while(true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS)
    for(let i=0; i < images.length; i++) {
      yield fork(handleImageStatsLoad, images[i].id)
    }
  }
}

export default watchImageStatsLoad