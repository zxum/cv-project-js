import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'


class App extends React.Component {

  constructor() {
    super()
    this.state = { previewMode: false }
    this.handlePreview = this.handlePreview.bind(this)
  }

  handlePreview() {
      this.setState({
        previewMode: !this.state.previewMode
      })
  }

  render() {
    return (
      <div className="main-body">
        {this.state.previewMode ? 
        <button id="edit-btn" onClick={this.handlePreview}><i className="fas fa-edit"></i></button>
        :
        <button id="preview-btn" onClick={this.handlePreview}><i className="fas fa-file-alt"></i></button>}
        <Sidebar previewMode={this.state.previewMode} />
        <MainContainer previewMode={this.state.previewMode} /> 
      </div>
    )
  }
  
}

export default App;
