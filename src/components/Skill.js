import React from 'react'
import contentEditable from './contentEditable'

function Skill(props) {

  let EditableSpan = contentEditable('span')

  return (
    <div className="skill-item">
      <EditableSpan value={props.skill} /> 
      <i className="fas fa-times-circle btn" 
         id="delete-btn"
         onClick={()=>{props.deleteSkill(props.skill)}}></i>
    </div>
  )

}

export default Skill
