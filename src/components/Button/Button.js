import React from 'react'

import './styles.css'

const Button = ({ children, loading, ...props }) => {
  // console.log("props children: ", children)
  return (
  <button className="button" disabled={loading} {...props}>
    {loading ? 'Loading.....' : children}
  </button>
  )
}

Button.defaultProps = {
  loading: false
}

export default Button