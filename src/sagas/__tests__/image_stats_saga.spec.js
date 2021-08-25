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
    const pageNum = 1;
    const images = await api.fetchImages(pageNum)
    const currImg = images[0]
    const img_id = currImg.id

    const image_stats = await api.fetchImageStats(img_id);
    const { downloads, views, likes } = image_stats

    await runSaga(fakeStore, handleImageStatsLoad, img_id).done

    const expectedActions = []
    expectedActions.push(loadImageStats(img_id))
    expectedActions.push(setImageStats(img_id, downloads.total, likes.total, views.total))

    console.log(dispatchedActions)
    console.log(image_stats)
    console.log(expectedActions)

    expect(dispatchedActions).toContainEqual(loadImageStats(img_id), setImageStats(img_id, downloads.total, likes.total, views.total))
  })
})