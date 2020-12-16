import { call, put, select, takeEvery } from 'redux-saga/effects'
import { setImages, setError } from '../actions'
import { fetchImages } from '../api'
import { IMAGES } from '../constants'

const getPage = state => state.nextPage 

function* handleImagesLoad() {
  try {
    const page = yield select(getPage)
    // console.log('page', page)
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