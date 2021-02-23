import { IMAGE_STATS } from '../constants'
import { takeEvery, select } from 'redux-saga/effects'

const getImages = state => state.images

function* handleImageStatsLoad() {

}

function* watchImageStatsLoad() {
  yield takeEvery(IMAGE_STATS.LOAD, handleImageStatsLoad)
}