import { call, takeEvery, put } from 'redux-saga/effects'
import { setStats, setErrorStats } from '../actions'
import { STATS } from '../constants'
import { fetchStats } from '../api'

function* handleStatsLoad() {
  try {
    const image_stats = yield call(fetchStats)
    yield put(setStats(image_stats))
  } catch (error) {
    yield put(setErrorStats(error.toString()))
  }
}

function* watchStatsLoad() {
  yield takeEvery(STATS.LOAD, handleStatsLoad)
}

export default watchStatsLoad