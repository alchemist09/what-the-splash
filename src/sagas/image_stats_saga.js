import { IMAGES } from '../constants'
import { take, fork, call, put } from 'redux-saga/effects'
import { fetchImageStats } from '../api'
import { loadImageStats, setImageStats, setImageStatsError} from '../actions'

function* handleImageStatsLoad(id) {
  console.log(`handle stats request for image ${id}`)
  for(let i=0; i < 3; i++) {
    try {
      yield put(loadImageStats(id))
      const image_stats = yield call(fetchImageStats, id)
      yield put(setImageStats({
        id,
        downloads: image_stats.downloads.total,
        likes: image_stats.likes.total,
        views: image_stats.views.total
      }))
      return true
    } catch (error) {
      // yield put(setImageStatsError({
      //   id,
      //   error
      // }))
    }
  }

  yield put(setImageStatsError(id, `error loading stats for image ID: ${id}`))
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