import React, { Component } from 'react'
import uniqid from 'uniqid'
import School from './School'

export class Educations extends Component {
  constructor() {
    super() 
    this.state = {
      showAddBtn: true,
      schools: [],
      school: {
        id: uniqid(),
        from: '',
        to: '',
        university: '',
        location: '',
        degree: ''
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
      school: {
        ...this.state.school,
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

  deleteSchool = (id) => {
    let newSchoolList = this.state.schools.filter(school => {
      return school.id != id
    })
    this.setState({
      schools: newSchoolList
    })
  }

  save = () => {
    this.setState({
      schools:[
        ...this.state.schools, 
        this.state.school]
    })
  }

  reset = () => {
    this.setState({
      school: {
        ...this.state.school,
        id: uniqid(),
        from: '',
        to: '',
        university: '',
        location: '',
        degree: ''
      }
    })
  }

  render() {
    let schoolList = this.state.schools.map(school => {
      return <School data={school} deleteSchool={this.deleteSchool} />
    })

    if (this.state.showAddBtn) {
      return (
        <div className="edu-block">
          {schoolList}
          <i className="fas fa-plus-circle" id="add-btn" onClick={this.toggleAddBtn}></i>
        </div>
      )
    } else {
      return (
        <div className="edu-block">
          {schoolList}
          <form className="edu-input">
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
              <label htmlFor="university">University: 
                <input type="text" name="university" onChange={this.handleChange} />
              </label>
              <label htmlFor="location">Location: 
                <input type="text" name="location" onChange={this.handleChange} />
              </label>
            </div>
            
            <label htmlFor="degree">Degree: 
              <input type="text" name="degree" onChange={this.handleChange} />
            </label>
            
          </form>
        </div>
      )
    }
    
  }
}

export default Educations
