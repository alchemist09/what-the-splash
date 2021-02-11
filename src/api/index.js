const KEY = "?client_id=biUxdd_dhgL76DVTq3Nn8U3jUqx7DMjE4mlrt2wI10o"
const URL = "https://api.unsplash.com/photos/"

const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=6&page=${page}`)
  // console.log(response)
  const data = await response.json()
  // console.log("[DATA].......", data)
  if(response.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}

export { fetchImages }