import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import '../styles/App.css'

function App() {
  return (
    <div className="main-body">
      <Sidebar />
      <MainContainer /> 
    </div>
  )
}

export default App;
