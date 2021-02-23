import { IMAGE_STATS } from '../constants'
import { takeEvery } from 'redux-saga/effects'

function* handleImageStatsLoad() {

}

function* watchImageStatsLoad() {
  yield takeEvery(IMAGE_STATS.LOAD, handleImageStatsLoad)
}