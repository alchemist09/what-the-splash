import { runSaga } from 'redux-saga'
import { handleImageStatsLoad } from '../image_stats_saga'
import * as api from '../../api'
import { loadImageStats, setImageStats, setImageStatsError } from '../../actions'

describe("Image Stats Saga", () => {
  let dispatchedActions = null
  let fakeStore = null

  beforeEach(() => {
    dispatchedActions = []
    fakeStore = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => ({})
    }
  })

  test("should load statistics for a particular image and handle them if successful", async () => {
    // const dispatchedActions = []
    // const fakeStore = {
    //   dispatch: action => dispatchedActions.push(action),
    //   getState: () => ({})
    // }
    
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
    console.log(dispatchedActions)

    expect(api.fetchImageStats.mock.calls.length).toBe(1)
    expect(dispatchedActions).toEqual([loadImageStats(fakeImageId), setImageStats(fakeImageId, downloads.total, views.total, likes.total)])
    api.fetchImageStats.mockReset()
  })

  test("should handle error while loading image statistics in case of error", async () => {
    // const dispatchedActions = []
    // const fakeStore = {
    //   dispatch: action => dispatchedActions.push(action),
    //   getState: () => ({})
    // }

    const fakeImageId = "ABC_123"
    const some_error = "Oops!! Unexpected Error occured"
    api.fetchImageStats = jest.fn(() => Promise.reject(some_error))

    await runSaga(fakeStore, handleImageStatsLoad, fakeImageId).done

    console.log(dispatchedActions)

    expect(api.fetchImageStats.mock.calls.length).toBe(3)
    expect(dispatchedActions).toEqual([
      loadImageStats(fakeImageId),
      loadImageStats(fakeImageId),
      loadImageStats(fakeImageId),
      setImageStatsError(fakeImageId, some_error)
    ])
    api.fetchImageStats.mockReset()
  })
})