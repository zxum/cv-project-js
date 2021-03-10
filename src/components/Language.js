import React from 'react'
import contentEditable from './contentEditable'

function Languages(props) {

  let EditableSpan = contentEditable('span')

  return (

    <div className="skill-item">
      <EditableSpan value={props.lang} /> 
      {(props.previewMode) ? <div></div> : 
      <i class="fas fa-times-circle btn" 
      id="delete-btn"
      onClick={()=>{props.deleteLang(props.lang)}}></i>
      }
    </div>

  )

}

export default Languages