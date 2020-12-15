import { IMAGES } from '../constants'

const loadImages = () => ({
  type : IMAGES.LAOD_START
})

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images
})