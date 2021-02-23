import { fork, all } from 'redux-saga/effects'

import imagesSaga from './images_saga'
import statsSaga from './stats_saga'
import imageStatsSaga from './image_stats_saga'

function* rootSaga() {
  yield all([
    fork(imagesSaga),
    fork(statsSaga),
    fork(imageStatsSaga)
  ])
}

export default rootSaga