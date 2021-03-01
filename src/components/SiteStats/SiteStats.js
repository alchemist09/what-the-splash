import React from 'react'

const SiteStats = ({
  loading,
  downloads, 
  views, 
  new_photos, 
  new_photographers, 
  new_developers, 
  new_applications 
}) => {
  if(loading) {
    return <p>Loading!!....</p>
  }

  return (
    <div>
      <h3>UnSplash Stats</h3>
      <p>Downloads: {downloads}</p>
      <p>Views: {views}</p>
      <p>New Photos: {new_photos}</p>
      <p>New Photographers: {new_photographers}</p>
      <p>New Developers: {new_developers}</p>
      <p>New Applications: {new_applications}</p>
    </div>
  )
}

export default SiteStats