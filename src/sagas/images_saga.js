import { call, put, select, takeEvery } from 'redux-saga/effects'
import { setImages, setError } from '../actions'
import { fetchImages } from '../api'
import { IMAGES } from '../constants'

export const getPage = state => state.nextPage 

export function* handleImagesLoad() {
  try {
    const page = yield select(getPage)
    const images = yield call(fetchImages, page)
    yield put(setImages(images))
  } catch (error) {
    yield put(setError(error.toString()))
  }
}

function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}

export default watchImagesLoad