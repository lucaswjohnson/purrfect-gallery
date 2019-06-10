import React, { Component } from 'react'
import './App.scss'
import Gallery from '../Gallery/Gallery'
import Theme from '../Theme/Theme'
import { themes } from '../../themes'
import { store } from '../../index'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    theme: 'blue'
  }

  componentDidMount () {
    store.subscribe(() => {
      this.setState({
        theme: store.getState().theme
      })
    })
  }

  getTheme = (type) => {
    const { theme = 'blue' } = this.state
    const { primary, secondary, accent } = themes[theme]
    const isAccent = type === 'accent'

    return {
      color: primary,
      backgroundColor: isAccent ? accent : secondary
    }
  }

  render () {
    return (
      <div className="home-container">
        <div className="home-nav" style={this.getTheme('primary')}>
          <div className="home-title" style={this.getTheme('accent')}>
            Purrfect Gallery
          </div>
          <div className="home-links" style={this.getTheme('primary')}>
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
}

export default connect()(App)
