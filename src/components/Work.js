import React from 'react'
import contentEditable from './contentEditable'

function Work(props) {

  let EditableP = contentEditable('p')
  let EditableSpan = contentEditable('span')
  let EditableH3 = contentEditable('h3')

  return (
    <div className="work-info">
      <div className="flex-wrapper right-side">
        {(props.previewMode) ? <div></div> : 
        <i className="fas fa-times-circle btn" 
        id="delete-btn"
        onClick={()=>{props.deleteWork(props.data.id)}}></i>}
        
      </div>
      <div className="flex-wrapper">
        <div className="dates">
            <EditableP value={props.data.from} /> to <EditableP value={props.data.to} />
        </div>
        <div className="other">
          <EditableH3 value={props.data.position} /> 
          <div className="italic">
            <EditableSpan value={props.data.company} />, <EditableSpan value={props.data.location} />
          </div>
          <EditableP value={props.data.description} />
        </div>
      </div>
    </div>
  )
}

export default Work
