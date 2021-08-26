import { getPage, handleImagesLoad } from "../images_saga";
import { runSaga } from 'redux-saga'
import * as api from '../../api'
import { setError, setImages } from "../../actions";

describe("Images Saga", () => {
  let dispatchedActions = null
  let fakeStore = null

  beforeEach(() => {
    dispatchedActions = []
    fakeStore = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => ({})
    }
  })

  test("should give us the next page", () => {
    const nextPage = 1
    const state = { nextPage }
    const res = getPage(state)
    expect(res).toBe(nextPage)
  })

  test("should load images and handle them in case of success", async () => {
    // const dispatchedActions = []
    // const fakeStore = {
    //   dispatch: action => dispatchedActions.push(action),
    //   getState: () => ({ nextPage: 1 })
    // }

    const mockedImages = ['image1', 'image2', 'image3']
    api.fetchImages = jest.fn(() => Promise.resolve(mockedImages))

    await runSaga(fakeStore, handleImagesLoad).done
    
    expect(api.fetchImages.mock.calls.length).toBe(1)
    expect(dispatchedActions).toContainEqual(setImages(mockedImages))
    api.fetchImages.mockReset()
  })

  test("should handle error in case of fail", async () => {
    // const dispatchedActions = []
    // const fakeStore = {
    //   dispatch: action => dispatchedActions.push(action),
    //   getState: () => ({ nextPage: 1 })
    // }

    const error_type = "Ooops!! some error occured"
    api.fetchImages = jest.fn(() => Promise.reject(error_type))

    await runSaga(fakeStore, handleImagesLoad).done
    
    expect(api.fetchImages.mock.calls.length).toBe(1)
    expect(dispatchedActions).toContainEqual(setError(error_type))
    api.fetchImages.mockReset()
  })
})