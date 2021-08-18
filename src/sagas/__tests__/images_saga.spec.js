import { getPage, handleImagesLoad } from "../images_saga";
import { runSaga } from 'redux-saga'
import { fetchImages } from '../../api'
import * as api from '../../api'
import { setImages } from "../../actions";

describe("Images Saga", () => {
  test("should give us the next page", () => {
    const nextPage = 1
    const state = { nextPage }
    const res = getPage(state)
    expect(res).toBe(nextPage)
  })

  test("should load images and handle them in case of success", async () => {
    const dispatchedActions = []
    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => ({ nextPage: 1 })
    }

    const mockedImages = ['image1', 'image2', 'image3']
    api.fetchImages = jest.fn(() => Promise.resolve(mockedImages))

    await runSaga(fakeStore, handleImagesLoad).done
    console.log(dispatchedActions)
    console.log(fakeStore.getState())
    
    expect(api.fetchImages.mock.calls.length).toBe(1)
    expect(dispatchedActions).toContainEqual(setImages(mockedImages))
  })
})