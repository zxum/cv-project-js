import React, { Component } from 'react'
import Language from './Language'

export class Languages extends Component {
  constructor() {
    super()
    this.state = { 
      languages:[],
      isAdding: false }
    this.setAdding = this.setAdding.bind(this)
    this.addLanguage = this.addLanguage.bind(this)
    this.deleteLang = this.deleteLang.bind(this)
  }

  setAdding() {
    this.setState({
      isAdding: true
    })
  }

  addLanguage(event) {
    event.preventDefault()
    
    let {value} = event.target.firstChild
    this.setState((prevState)=>{
      let newLanguages = prevState.languages.concat(value)
      console.log({prevState})
      event.target.reset()
      return {
        languages: newLanguages,
        isAdding: false
      }
    })
  }

  deleteLang(item) {
    let newLangList = this.state.languages.filter(lang => {
      return lang != item
    })

    this.setState({
      languages: newLangList
    })
  }

  render() {
    let languagesList = this.state.languages.map(lang => {
      return <Language lang={lang} deleteLang={this.deleteLang} />
    })
    
    if (this.state.isAdding) {
      return (
        <div className="languages-list">
          <ul>
            {languagesList}
          </ul>
          <form onSubmit={this.addLanguage}> 
            <input type="text" />
          </form>
        </div>
      )
    } else {
      return (
        <div className="languages-list">
          <ul>
          {languagesList}
          </ul>
          <i className="fas fa-plus-circle btn" id="add-btn" onClick={this.setAdding}></i>
        </div>
      )
    }
  }
}

export default Languages
