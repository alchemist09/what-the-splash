import { takeEvery } from 'redux-saga/effects'

import { IMAGES } from '../constants'

// worker saga

// function* workerSaga() {
//   console.log("WORKER SAGA HAS RUNNED")
//   yield put({ type: 'SAGA TEST '})
//   console.log(put({ type: 'FINAL ACTION FROM WORKER' }))
//   yield put({ type: 'FINAL ACTION FROM WORKER' })
// }

function* handleImagesLoad() {
  console.log("fetching images from unsplash...")
}

// function* handleChant() {
//   console.log('SAGA! SAGA!! SAGA!!!')
// }

// function* byebyeSaga() {
//   console.log("bye bye, talk later")
// }

// watcher saga

// function* rootSaga() {
//   yield take('LOGIN')
//   yield call(workerSaga)
//   // yield take('ADD_TO_CART')
//   // yield take('BUY')
//   yield take('LOGOUT')
//   yield call(byebyeSaga)
// }

function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad)
  // yield takeEvery('CHANT', handleChant)
  // yield take(IMAGES.LOAD)
  // yield call(handleImagesLoad)
  // yield take('CHANT')
  // yield call(handleChant)
  // yield take(IMAGES.LOAD)
  // yield call(handleImagesLoad)
}

export default rootSaga