import { handleStatsLoad } from '../stats_saga'
import { runSaga } from 'redux-saga'
import * as api from '../../api'
import { setSiteStats } from '../../actions'


describe('Stats Saga', () => {
  test('should load general statistics and handle them if successful', async () => {
    const dispatchedActions =  []
    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => {}
    }

    const site_stats = await api.fetchStats()
    await runSaga(fakeStore, handleStatsLoad).done
    console.log(dispatchedActions)
    console.log(site_stats)

    expect(dispatchedActions).toContainEqual(setSiteStats(site_stats))
  })
})