import React from 'react'
import PropTypes from "prop-types"
import './style.css'

export const FontIconExample = ({className}) => {
  return (
    <div className={className}></div>
  )
}

FontIconExample.propTypes = {
    className: PropTypes.string
}