import { fork } from 'redux-saga/effects'

import imagesSaga from './images_saga'
import statsSaga from './stats_saga'

function* rootSaga() {
  yield fork(imagesSaga)
  yield fork(statsSaga)
}

export default rootSaga