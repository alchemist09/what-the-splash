import React, { Fragment } from 'react'

const Stats = ({ stats, id }) => {
  if(Object.keys(stats).length === 0) {
    return '<span>Loading......</span>'
  }

  console.log("Stats Prop", stats)
  console.log("Stats ID: ", id)
  
  return (
    <Fragment>
      <span>{stats[id] && stats[id].error && 'Error!!!'}</span>
      <span>{stats[id] && stats[id].loading && 'Loading.....'}</span>
      <span>{stats[id] && !stats[id].loading && 'Downlaods: ' + stats[id].payload.downloads}&nbsp;&nbsp;&nbsp;</span>
      <span>{stats[id] && !stats[id].loading && 'Views: ' + stats[id].payload.views}&nbsp;&nbsp;&nbsp;</span>
      <span>{stats[id] && !stats[id].loading && 'Likes: ' + stats[id].payload.likes}</span>
    </Fragment>
  )
}

export default Stats