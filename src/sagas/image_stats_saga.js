import { IMAGES } from '../constants'
import { take, fork, call, put } from 'redux-saga/effects'
import { fetchImageStats } from '../api'
import { loadImageStats, setImageStats, setImageStatsError} from '../actions'

export function* handleImageStatsLoad(id) {
  console.log(`handle stats request for image ${id}`)
  for(let i=0; i < 3; i++) {
    try {
      yield put(loadImageStats(id))
      const image_stats = yield call(fetchImageStats, id)
      const { downloads, likes, views } = image_stats
      yield put(setImageStats(
        id,
        downloads.total,
        likes.total,
        views.total
      ))
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
    console.log("TAKE EFFECT>>>>>>>>>>>>>>>", take())
    const { images } = yield take(IMAGES.LOAD_SUCCESS)
    for(let i=0; i < images.length; i++) {
      yield fork(handleImageStatsLoad, images[i].id)
    }
  }
}

export default watchImageStatsLoad