import React, { Fragment } from 'react'

const Stats = ({ stats, id }) => {
  if(Object.keys(stats).length === 0) {
    return '<span>Loading......</span>'
  }

  console.log("Stats Prop", stats)
  console.log("Stats ID: ", id)

  const renderImageStats = () => {
    if(stats[id] && stats[id].error) {
      return <p>Error!!!</p>
    }

    if(stats[id] && stats[id].loading) {
      return <p>Loading.......</p>
    }

    if(stats[id] && !stats[id].loading) {
      return (
        <Fragment>
          <span>Downloads: {stats[id].payload.downloads}</span>
          <span>Views: {stats[id].payload.views}</span>
          <span>Likes: {stats[id].payload.likes}</span>
        </Fragment> 
      )
    }
  }

  return (
    <div>
      {renderImageStats()}
    </div>
    
  )
}

export default Stats