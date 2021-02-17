import { fork, all } from 'redux-saga/effects'

import imagesSaga from './images_saga'
import statsSaga from './stats_saga'

function* rootSaga() {
  yield all([
    fork(imagesSaga),
    fork(statsSaga)
  ])
}

export default rootSaga