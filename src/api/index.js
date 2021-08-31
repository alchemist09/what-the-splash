const KEY = "?client_id=biUxdd_dhgL76DVTq3Nn8U3jUqx7DMjE4mlrt2wI10o"
const URL = "https://api.unsplash.com/photos/"
const URL_STATS = "https://api.unsplash.com/stats/"

const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`)
  const data = await response.json()
  if(response.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}

const fetchStats = async () => {
  const response = await fetch(`${URL_STATS}month${KEY}`)
  const data = await response.json()
  console.log(data)
  if(response.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}

const fetchImageStats = async id => {
  const response = await fetch(`${URL}${id}/statistics${KEY}`)
  const data = await response.json()
  if(response.data >= 400) {
    throw new Error(data.errors)
  }
  return data
}

export { 
  fetchImages, 
  fetchStats,
  fetchImageStats
}