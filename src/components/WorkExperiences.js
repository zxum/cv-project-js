import React, { Component } from 'react'
import uniqid from 'uniqid'
import Work from './Work'

export class WorkExperiences extends Component {

  constructor() {
    super() 
    this.state = {
      showAddBtn: true,
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
    this.handleChange = this.handleChange.bind(this)
  }

  toggleAddBtn = () => {
    this.setState({
      showAddBtn: !this.state.showAddBtn
    })
  }

  handleCancel = (event) => {
    let form = event.target.parentNode.parentNode
    console.log(form)
    

    this.toggleAddBtn()
  }

  handleChange = (event) => {
    let {name, value} = event.target

    this.setState({
      work: {
        ...this.state.work,
        [name]: value
      }
    })
  }

  handleDone = () => {
    this.save()
    this.toggleAddBtn()
    this.reset()
  }

  handleSubmit = (event) => {
    event.preventDefault() 

    this.save()
    this.toggleAddBtn()
    this.reset()
  }

  deleteWork = (id) => {
    let newWorkList = this.state.workexps.filter(work => {
      return work.id != id
    })
    this.setState({
      workexps: newWorkList
    })
  }

  save = () => {
    this.setState({
      workexps:[
        ...this.state.workexps, 
        this.state.work]
    })
  }

  reset = () => {
    this.setState({
      work: {
        ...this.state.work,
        id: uniqid(),
        from: '',
        to: '',
        company: '',
        location: '',
        position: '',
        description: ''
      }
    })
  }


  render() {
    let workList = this.state.workexps.map((work)=>{
      return <Work key={work.id} data={work} deleteWork={this.deleteWork} />
    })
    if (this.state.showAddBtn) {
      return (
        <div className="work-block">
          {workList}
          <i className="fas fa-plus-circle" id="add-btn" onClick={this.toggleAddBtn}></i>
        </div>
      )
    } else {
      return (
      <div className="work-block">
        {workList}
        <form className="work-input">
          <div className="flex-wrapper right-side">
            <i className="fas fa-check-circle btn" id="done-btn" onClick={this.handleSubmit}></i>
            <i className="fas fa-times-circle btn" id="delete-btn" onClick={this.handleCancel}></i>
          </div>

          <div className="flex-wrapper">
            <label htmlFor="from">From: 
              <input type="text" name="from" placeholder="YYYY" onChange={this.handleChange}/>
            </label>
            <label htmlFor="to">To: 
              <input type="text" name="to" placeholder="YYYY" onChange={this.handleChange} />
            </label>
          </div>

          <div className="flex-wrapper">
            <label htmlFor="company">Company: 
              <input type="text" name="company" onChange={this.handleChange} />
            </label>
            <label htmlFor="location">Location: 
              <input type="text" name="location" onChange={this.handleChange} />
            </label>
          </div>
          
          <label htmlFor="position">Position: 
            <input type="text" name="position" onChange={this.handleChange} />
          </label>
        
          <label htmlFor="description">Description: 
            <textarea name="description" onChange={this.handleChange}/>
          </label>

        </form>
      </div>
      )
    }
  }
}

export default WorkExperiences
