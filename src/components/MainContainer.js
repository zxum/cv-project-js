import React from 'react'
import contentEditable from './contentEditable'
import MainBodySectionHeader from './MainBodySectionHeader'
import WorkExperiences from './WorkExperiences'
import Educations from './Educations'

function MainContainer() {
  let EditableP = contentEditable('p')
  return (
    <section className="main-container">
      <EditableP className="objective" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ex ac blandit ultricies, quam sem cursus elit, at maximus magna neque in libero. Duis maximus erat erat, at vehicula eros rutrum ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ex ac blandit ultricies, quam sem cursus elit, at maximus magna neque in libero." />
    
      <MainBodySectionHeader text="Work Experience"/> 
      <div className="padded-vertical">
        <WorkExperiences />
      </div>

      <MainBodySectionHeader text="Education"/> 
      <div className="padded-vertical">
        <Educations />
      </div>
    </section>
  )
}

export default MainContainer
