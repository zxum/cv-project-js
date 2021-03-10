import React from 'react'
import Skill from './Skill'


class Skills extends React.Component {
  constructor() {
    super()

    this.state = { 
      skills:[],
      isAdding: false }

    this.setAdding = this.setAdding.bind(this)
    this.addSkill = this.addSkill.bind(this)
    this.deleteSkill = this.deleteSkill.bind(this)
  }

  setAdding() {
    this.setState({
      isAdding: true
    })
  }

  addSkill(event) {
    event.preventDefault()

    let {value} = event.target.firstChild
    this.setState((prevState)=>{
      let newSkills = prevState.skills.concat(value)

      event.target.reset()
      return {
        skills: newSkills,
        isAdding: false
      }
    })
  }

  deleteSkill(item) {
    let newSkillsList = this.state.skills.filter(skill => {
      return skill != item
    })

    this.setState({
      skills: newSkillsList
    })
  }

  render() {
    let skillList = this.state.skills.map((skill)=>{
      return <Skill skill={skill} deleteSkill={this.deleteSkill} />
    })
    
    // .map(skill => {
    //   return <Skill skill={skill} deleteSkill={this.deleteSkill} />
    // })

    console.log(skillList)

      if (this.state.isAdding) {
        return (
          <div className="skills-list">
            <ul>
              {skillList}
            </ul>
            <form onSubmit={this.addSkill}> 
              <input type="text" />
            </form>
          </div>
        )
      } else {
        return (
          <div className="skills-list">
            <ul>
            {skillList}
            </ul>
            <i className="fas fa-plus-circle btn" id="add-btn" onClick={this.setAdding}></i>
          </div>
        )
      }
  }
  
}

export default Skills
