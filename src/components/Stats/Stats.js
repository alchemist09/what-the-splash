import React, { Fragment } from 'react'
import icon_download from '../../assets/icons/cloud-computing.png'
import icon_views from '../../assets/icons/eye.png'
import icon_likes from '../../assets/icons/heart.png'
import icon_error from '../../assets/icons/warning.png'
import './styles.css'

const Stats = ({ stats, id }) => {
  if(Object.keys(stats).length === 0) {
    return '<span>Loading......</span>'
  }

  console.log("Stats Prop", stats)
  console.log("Stats ID: ", id)

  const renderImageStats = () => {
    if(stats[id] && stats[id].error) {
      const alt_mesg = `error loading stats for image ID: ${id}`
      return <span className="image-stats"><img src={icon_error} alt={alt_mesg} /></span>
    }

    if(stats[id] && stats[id].loading) {
      return <p>Loading.......</p>
    }

    if(stats[id] && !stats[id].loading) {
      return (
        <Fragment>
          <span className="image-stats"><img className="icon-download" src={icon_download} alt="downloads" /> {stats[id].payload.downloads}</span>
          <span className="image-stats"><img className="icon-download" src={icon_views} alt="views" /> {stats[id].payload.views}</span>
          <span className="image-stats"><img className="icon-download" src={icon_likes} alt="likes" /> {stats[id].payload.likes}</span>          
        </Fragment> 
      )
    }
  }

  return (
    <div className="display-stats">
      {renderImageStats()}
    </div>
    
  )
}

export default Stats