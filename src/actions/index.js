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

const loadSiteStats = () => ({
  type: STATS.LOAD
})

 const setSiteStats = stats => ({
   type: STATS.LOAD_SUCCESS,
   stats
 })

 const setSiteStatsError = error => ({
   type: STATS.LOAD_FAIL,
   error
 })

export {
  loadImages,
  setImages,
  setError,
  loadSiteStats,
  setSiteStats,
  setSiteStatsError
}