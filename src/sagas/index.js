import { takeEvery, put } from 'redux-saga/effects'


// worker saga
function* workerSaga() {
  console.log("WORKER SAGA HAS RUNNED")
  yield put({ type: 'SAGA TEST '})
  console.log(put({ type: 'FINAL ACTION FROM WORKER' }))
  yield put({ type: 'FINAL ACTION FROM WORKER' })
}

// watcher saga
function* rootSaga() {
  yield takeEvery('HELLO', workerSaga)
}

export default rootSaga