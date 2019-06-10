import React from 'react'
import './App.scss'
import Gallery from '../Gallery/Gallery'
import Theme from '../Theme/Theme'
import { themes } from '../../themes'
import { connect } from 'react-redux'

const App = ({ theme = 'blue' }) => {
  const getTheme = (type) => {
    const { primary, secondary, accent } = themes[theme]
    const isAccent = type === 'accent'

    return {
      color: primary,
      backgroundColor: isAccent ? accent : secondary
    }
  }

  return (
    <div className="home-container">
      <div className="home-nav" style={getTheme('primary')}>
        <div className="home-title" style={getTheme('accent')}>
          Purrfect Gallery
        </div>
        <div className="home-links" style={getTheme('primary')}>
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

const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme
  }
}

export default connect(mapStateToProps)(App)
