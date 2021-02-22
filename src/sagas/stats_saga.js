import { call, takeEvery, put } from 'redux-saga/effects'
import { setImageStats, setImageStatsError } from '../actions'
import { STATS } from '../constants'
import { fetchStats } from '../api'

function* handleStatsLoad() {
  try {
    const image_stats = yield call(fetchStats)
    yield put(setImageStats(image_stats))
  } catch (error) {
    yield put(setImageStatsError(error.toString()))
  }
}

function* watchStatsLoad() {
  yield takeEvery(STATS.LOAD, handleStatsLoad)
}

export default watchStatsLoad