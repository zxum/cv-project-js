import React, { Component } from 'react'

export class WorkExperiences extends Component {

  constructor() {
    super() 
    this.state = {
      showAddBtn: true
      workexps: [],
      work: {
        id:uniqid(),
        from: '',
        to: '',
        company: '',
        location: '',
        position: '',
        description: ''
      }
    }
    this.toggleAddBtn = this.toggleAddBtn.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleDone = this.handleCancel.bind(this)
  }

  toggleAddBtn() {
    this.setState({
      showAddBtn: !this.state.showAddBtn
    })
  }

  handleDone() {
    
  }

  handleCancel(event) {
    let form = event.target.parentNode.parentNode
    console.log(form)
    

    this.toggleAddBtn()
  }

  save() {

  }


  render() {
    if (this.state.showAddBtn) {
      return (
        <div className="work-block">
          <i className="fas fa-plus-circle" id="add-btn" onClick={this.toggleAddBtn}></i>
        </div>
      )
    } else {
      return (
      <div className="work-block">
        <form className="work-input">
          <div className="flex-wrapper right-side">
            <i className="fas fa-check-circle btn" id="done-btn" onClick={this.handleSubmit}></i>
            <i className="fas fa-times-circle btn" id="delete-btn" onClick={this.handleCancel}></i>
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
      </div>
      )
    }
  }
}

export default WorkExperiences
