import { IMAGES, STATS } from '../constants'

const loadImages = () => ({
  type : IMAGES.LOAD
})

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images
})

const setError = error => ({
  type: IMAGES.LOAD_FAIL,
  error
})

const loadImageStats = () => ({
  type: STATS.LOAD
})

 const setImageStats = stats => ({
   type: STATS.LOAD_SUCCESS,
   stats
 })

 const setImageStatsError = error => ({
   type: STATS.LOAD_FAIL,
   error
 })

export {
  loadImages,
  setImages,
  setError,
  loadImageStats,
  setImageStats,
  setImageStatsError
}