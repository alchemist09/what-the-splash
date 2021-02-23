import { IMAGES, STATS, IMAGE_STATS } from '../constants'

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

 const loadImageStats = id => ({
   type: IMAGE_STATS.LOAD,
   id
 })

 const setImageStats = ({ id, downloads, views, likes }) => ({
   type: IMAGE_STATS.LOAD_SUCCESS,
   id,
   payload: {
     downloads,
     views,
     likes
   }
 })

 const setImageStatsError = ({ id, error }) => ({
   type: IMAGE_STATS.LOAD_FAIL,
   id,
   error
 })

export {
  loadImages,
  setImages,
  setError,
  loadSiteStats,
  setSiteStats,
  setSiteStatsError,
  loadImageStats,
  setImageStats,
  setImageStatsError
}