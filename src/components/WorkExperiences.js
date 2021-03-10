import React, { Component } from 'react'

export class WorkExperiences extends Component {
  render() {
    return (
      <div className="work-block">
        <form className="work-input">
          <div className="flex-wrapper right-side">
            <i className="fas fa-check-circle btn" id="done-btn"></i>
            <i className="fas fa-times-circle btn" id="delete-btn"></i>
          </div>

          <div className="flex-wrapper">
            <label htmlFor="from">From: 
              <input type="text" id="from" placeholder="YYYY"/>
            </label>
            <label htmlFor="to">To: 
              <input type="text" id="to" placeholder="YYYY" />
            </label>
          </div>

          <div className="flex-wrapper">
            <label htmlFor="company">Company: 
              <input type="text" id="company" />
            </label>
            <label htmlFor="location">Location: 
              <input type="text" id="location" />
            </label>
          </div>
          
          <label htmlFor="position">Position: 
            <input type="text" id="position" />
          </label>
        
          <label htmlFor="description">Description: 
            <textarea name="" id="description"></textarea>
          </label>

        </form>
        
        <i className="fas fa-plus-circle" id="add-btn"></i>
      </div>
    )
  }
}

export default WorkExperiences
