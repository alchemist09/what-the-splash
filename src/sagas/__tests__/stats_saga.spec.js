import { handleStatsLoad } from '../stats_saga'
import { runSaga } from 'redux-saga'
import * as api from '../../api'
import { setSiteStats, setSiteStatsError } from '../../actions'


describe('Stats Saga', () => {
  test('should load general statistics and handle them if successful', async () => {
    const dispatchedActions =  []
    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => ({})
    }

    const mockedStats = {
      downloads: 1000,
      views: 500,
      new_photos: 200
    }

    api.fetchStats = jest.fn(() => Promise.resolve(mockedStats))
    await runSaga(fakeStore, handleStatsLoad).done

    expect(api.fetchStats.mock.calls.length).toBe(1)
    expect(dispatchedActions).toContainEqual(setSiteStats(mockedStats))
    api.fetchStats.mockReset()
  })

  test('should handle error while loading site stats in case of failure', async () => {
      const dispatchedActions = []
      const fakeStore = {
        dispatch: action => dispatchedActions.push(action),
        getState: () => ({})
      }

      const error_var = "Oops!! something went wrong"
      api.fetchStats = jest.fn(() => Promise.reject(error_var))
      await runSaga(fakeStore, handleStatsLoad).done;
      console.log(dispatchedActions)

      expect(api.fetchStats.mock.calls.length).toBe(1)
      expect(dispatchedActions).toContainEqual(setSiteStatsError(error_var))
  })
})