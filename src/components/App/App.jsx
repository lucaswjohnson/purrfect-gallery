import React, { Component } from 'react'
import './App.scss'
import Gallery from '../Gallery/Gallery'
import Theme from '../Theme/Theme'
import { blueTheme, greenTheme, purpleTheme, orangeTheme } from '../themes'

class App extends Component {
  state = {
    theme: 'blue'
  }

  handleThemeChange = (theme) => () => {
    this.setState({ theme })
  }

  getTheme = () => {
    const { theme } = this.state
    switch (theme) {
      case 'blue':
        return blueTheme
      case 'green':
        return greenTheme
      case 'purple':
        return purpleTheme
      case 'orange':
        return orangeTheme
      default:
        return { color: '#fff' }
    }
  }

  render () {
    return (
      <div className="home-container">
        <div className="home-nav" style={this.getTheme()}>
          <div className="home-links" style={this.getTheme()}>
            <a onClick={() => console.log('hey')}>Linkie</a>
            <a onClick={() => console.log('hey')}>Linkie</a>
            <a onClick={() => console.log('hey')}>Linkie</a>
            <a onClick={() => console.log('hey')}>Linkie</a>
          </div>
          <Theme handleThemeChange={this.handleThemeChange} />
        </div>
        <Gallery />
      </div>
    )
  }
}

export default App
