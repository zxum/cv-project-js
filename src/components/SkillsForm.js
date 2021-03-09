import React, { Component } from 'react'

export class SkillsForm extends Component {
  constructor() {
    super()
    this.state = { isAdding: false }
    this.setAdding = this.setAdding.bind(this)
    this.addSkill = this.addSkill.bind(this)
  }

  setAdding() {
    this.setState({
      isAdding: true
    })
  }

  addSkill() {

  }
  
  render() {
    if (this.state.isAdding) {
      return (
        <form onSubmit={this.addSkill}> 
          <input type="text" />
        </form>
      )
    } else {
      return (
        <i className="fas fa-plus-circle" id="add-btn" onClick={this.setAdding}></i>
      )
    }
  }

}

export default SkillsForm
