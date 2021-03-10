import React from 'react'
import contentEditable from './contentEditable'
import SidebarSectionHeader from './SidebarSectionHeader'
import Skills from './Skills'
import Languages from './Languages'


function Sidebar() {
  let EditableH1 = contentEditable('h1')
  let EditableP = contentEditable('p')
  return (
    <aside className="sidebar">
      <div className="padded">
        <EditableH1 value="First Name"/> 
        <EditableH1 value="Last Name"/> 
        <EditableP value="Position" />
      </div>
      
      <SidebarSectionHeader text="Personal Info"/> 
      <div className="padded-lr small-text">
        <p className="label">Phone</p>
        <EditableP value="(123) 340-1234" />
        <p className="label">Email</p>
        <EditableP value="example@example.com" />
        <p className="label">Linkedin</p>
        <EditableP value="linkedin.com/username" />
      </div>
      

      <SidebarSectionHeader text="Skills"/>
      <div className="padded-lr">
        <Skills /> 
        
      </div>
      
      <SidebarSectionHeader text="Languages"/>
      <div className="padded-lr">
        <Languages />
      </div>

    </aside>
  )
}

export default Sidebar
