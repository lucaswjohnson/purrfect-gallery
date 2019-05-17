import React from 'react'
import './App.scss'
import Gallery from '../Gallery/Gallery'
import Theme from '../Theme/Theme'

const App = () => {
  return (
    <div className="home-container">
      <div className="home-nav">
        <div className="home-links">
          <a onClick={() => console.log('hey')}>Linkie</a>
          <a onClick={() => console.log('hey')}>Linkie</a>
          <a onClick={() => console.log('hey')}>Linkie</a>
          <a onClick={() => console.log('hey')}>Linkie</a>
        </div>
        <Theme />
      </div>
      <Gallery />
    </div>
  )
}

export default App
