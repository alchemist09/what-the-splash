import { call, takeEvery, put } from 'redux-saga/effects'
import { setStats, setErrorStats } from '../actions'
import { STATS } from '../constants'
import { fetchStats } from '../api'

function* watchStatsLoad() {
  yield takeEvery(STATS.LOAD, handleStatsLoad)
}

export default watchStatsLoad