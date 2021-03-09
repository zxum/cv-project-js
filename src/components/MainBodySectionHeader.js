import React from 'react'
import '../styles/MainBodySectionHeader.css'

function MainBodySectionHeader(props) {
  return (
    <div className="main-body-section-header">
      <h3>{props.text}</h3>
    </div>
  )
}

export default MainBodySectionHeader
