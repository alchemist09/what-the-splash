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

    // const pageNum = 1;
    // const images = await api.fetchImages(pageNum)
    // const currImg = images[0]
    // const img_id = currImg.id
    
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

    // const image_stats = await api.fetchImageStats(img_id);
    // const { downloads, views, likes } = image_stats

    await runSaga(fakeStore, handleImageStatsLoad, fakeImageId).done

    const { downloads, views, likes } = fakeStats
    console.log("downloads: ", downloads)
    console.log("views: ", views)
    console.log("likes: ", likes)

    console.log(dispatchedActions)

    console.log(dispatchedActions[1].payload)

    const myObj = setImageStats(fakeImageId, downloads, views, likes)
    console.log(myObj)

    const anotherObj = {
      someProp: "hahaha"
    }

    expect(dispatchedActions).toContainEqual(loadImageStats(fakeImageId), setImageStats(fakeImageId, downloads.total, views.total, likes.total))
  })
})