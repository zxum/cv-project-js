import React from 'react'
import contentEditable from './contentEditable'
import '../styles/MainContainer.css'
import MainBodySectionHeader from './MainBodySectionHeader'

function MainContainer() {
  let EditableP = contentEditable('p')
  return (
    <section className="main-container">
      <EditableP className="small-text" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ex ac blandit ultricies, quam sem cursus elit, at maximus magna neque in libero. Duis maximus erat erat, at vehicula eros rutrum ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ex ac blandit ultricies, quam sem cursus elit, at maximus magna neque in libero." />
    
      <MainBodySectionHeader text="Work Experience"/> 
      <div className="padded-vertical">
      <i className="fas fa-plus-circle" id="add-btn"></i>
      </div>

      <MainBodySectionHeader text="Education"/> 
      <div className="padded-vertical">
      <i className="fas fa-plus-circle" id="add-btn"></i>
      </div>
    </section>
  )
}

export default MainContainer
