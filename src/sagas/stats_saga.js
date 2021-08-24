import { call, takeEvery, put } from 'redux-saga/effects'
import { setSiteStats, setSiteStatsError } from '../actions'
import { STATS } from '../constants'
import { fetchStats } from '../api'

export function* handleStatsLoad() {
  try {
    const image_stats = yield call(fetchStats)
    yield put(setSiteStats(image_stats))
  } catch (error) {
    yield put(setSiteStatsError(error.toString()))
  }
}

function* watchStatsLoad() {
  yield takeEvery(STATS.LOAD, handleStatsLoad)
}

export default watchStatsLoad