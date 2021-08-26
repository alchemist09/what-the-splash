import { runSaga } from 'redux-saga'
import { handleImageStatsLoad } from '../image_stats_saga'
import * as api from '../../api'
import { loadImageStats, setImageStats } from '../../actions'

describe("Image Stats Saga", () => {
  test("should load statistics for a particular image and handle them if successful", async () => {
    const dispatchedActions = []
    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => ({})
    }
    
    const fakeImageId = "XYZ_001"

    const fakeStats = {
      downloads: {
        total: 2000
      },
      views: {
        total: 9000
      },
      likes: {
        total: 250
      }
    }
    
    api.fetchImageStats = jest.fn(() => Promise.resolve(fakeStats))

    await runSaga(fakeStore, handleImageStatsLoad, fakeImageId).done

    const { downloads, views, likes } = fakeStats

    expect(api.fetchImageStats.mock.calls.length).toBe(1)
    expect(dispatchedActions).toContainEqual(loadImageStats(fakeImageId), setImageStats(fakeImageId, downloads.total, views.total, likes.total))
    api.fetchImageStats.mockReset()
  })
})