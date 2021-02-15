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

const loadStats = () => ({
  type: STATS.LOAD
})

 const setStats = stats => ({
   type: STATS.LOAD_SUCCESS,
   stats
 })

 const setErrorStats = error => ({
   type: STATS.LOAD_FAIL,
   error
 })

export {
  loadImages,
  setImages,
  setError,
  loadStats,
  setStats,
  setErrorStats
}