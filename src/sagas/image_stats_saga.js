import { IMAGES } from '../constants'
import { take, fork, call, put } from 'redux-saga/effects'
import { fetchImageStats } from '../api'
import { loadImageStats, setImageStats, setImageStatsError } from '../actions'

export function* handleImageStatsLoad(id) {
  console.log(`handle stats request for image ${id}`)
  let err_value = null
  for(let i=0; i < 3; i++) {
    try {
      yield put(loadImageStats(id))
      const image_stats = yield call(fetchImageStats, id)
      const { downloads, views, likes } = image_stats
      yield put(setImageStats(
        id,
        downloads.total,
        views.total,
        likes.total,
      ))
      return true
    } catch (error) {
      err_value = error
    }
  }
  
  yield put(setImageStatsError(id, err_value.toString()))
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