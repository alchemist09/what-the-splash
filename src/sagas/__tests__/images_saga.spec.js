import { getPage } from "../images_saga";

describe("Images Saga", () => {
  test("should give us the next page", () => {
    const nextPage = 1
    const state = { nextPage }
    const res = getPage(state)
    expect(res).toBe(nextPage)
  })
})