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

    const mockedStats = {
      downloads: 1000,
      views: 500,
      new_photos: 200
    }

    api.fetchStats = jest.fn(() => Promise.resolve(mockedStats))
    await runSaga(fakeStore, handleStatsLoad).done
    console.log(dispatchedActions)
    // console.log(site_stats)

    expect(api.fetchStats.mock.calls.length).toBe(1)
    expect(dispatchedActions).toContainEqual(setSiteStats(mockedStats))
    api.fetchStats.mockReset()
  })
})