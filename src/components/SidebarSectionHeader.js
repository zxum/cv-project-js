import React from 'react'
// import '../styles/SidebarSectionHeader.css'
import '../styles/SIdebarSectionHeader.css'

function SidebarSectionHeader(props) {
  return (
    <div className="section-header">
      <h3>{props.text}</h3>
    </div>
  )
}

export default SidebarSectionHeader
