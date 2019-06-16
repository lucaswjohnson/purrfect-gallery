import React, { useState } from 'react'
import './App.scss'
import Gallery from '../Gallery/Gallery'
import Theme from '../Theme/Theme'
import { themes } from '../../themes'
import { connect } from 'react-redux'
import { handleTextChange, handleFontSizeChange,
  handleTextColorChange, handleFilterChange } from '../../actions/index'

interface IApp {
  theme: string,
  dispatch: any // TODO: type this properly
}

const App = ({ theme = 'blue', dispatch }: IApp) => {
  const [filterIndex, changeFilterIndex] = useState(0)
  const [textIndex, changeTextIndex] = useState(0)
  const [fontSizeIndex, changeFontSizeIndex] = useState(0)
  const [textColorIndex, changeTextColorIndex] = useState(0)

  const getTheme = (type: string) => {
    const { primary, secondary, accent } = themes[theme]
    const isAccent = type === 'accent'

    return {
      color: primary,
      backgroundColor: isAccent ? accent : secondary
    }
  }

  const handleChangeGallery = (type: string) => () => {
    const filters = ['', 'mono', 'sepia', 'negative', 'pixel']
    const texts = ['%20', 'meow', 'So Cuddly', 'Super Cute']
    const fontSizes = ['50', '65', '80', '30', '40']
    const textColors = ['white', 'cyan', 'red', 'purple', 'green']

    switch (type) {
      case 'filter':
        changeFilterIndex(filterIndex + 1)
        if (filterIndex > filters.length) changeFilterIndex(0)
        dispatch(handleFilterChange(filters[filterIndex]))
        break
      case 'text':
        changeTextIndex(textIndex + 1)
        if (textIndex > texts.length) changeTextIndex(0)
        dispatch(handleTextChange(texts[textIndex]))
        break
      case 'fontSize':
        changeFontSizeIndex(fontSizeIndex + 1)
        if (fontSizeIndex > fontSizes.length) changeFontSizeIndex(0)
        dispatch(handleFontSizeChange(fontSizes[fontSizeIndex]))
        break
      case 'textColor':
        changeTextColorIndex(textColorIndex + 1)
        if (textColorIndex > textColors.length) changeTextColorIndex(0)
        dispatch(handleTextColorChange(textColors[textColorIndex]))
        break
    }
  }

  return (
    <div className="home-container">
      <div className="home-nav" style={getTheme('primary')}>
        <div className="home-title" style={getTheme('accent')}>
          Purrfect Gallery
        </div>
        <div className="home-links" style={getTheme('primary')}>
          <div onClick={handleChangeGallery('text')}>Change Text</div>
          <div onClick={handleChangeGallery('fontSize')}>Change Font Size</div>
          <div onClick={handleChangeGallery('textColor')}>Change Text Color</div>
          <div onClick={handleChangeGallery('filter')}>Change Filter</div>
        </div>
        <Theme />
      </div>
      <Gallery />
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.themeReducer.theme
  }
}

export default connect(mapStateToProps)(App)
