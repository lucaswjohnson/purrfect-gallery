import React from 'react'
import { connect } from 'react-redux'

interface IProps {
  text?: string,
  fontSize?: string,
  textColor?: string,
  filter?: string,
  width?: string,
  height?: string,
  id?: string
}

const Cat: React.FC<IProps> = ({
  text = '%20', fontSize = '50', textColor = 'white',
  filter = '', width = '', height = '', id = Math.random()
}) => (
  <img
    src={`https://cataas.com/cat/says/${text}?s=${fontSize}&c=${textColor}
          &filter=${filter}&width=${width}&height=${height}&id=${id}`}
    alt={`Cute Kitty ${id}`}
  />
)

const mapStateToProps = (state: any) => {
  const { text, fontSize, textColor, filter, width, height } = state.catReducer

  return {
    text,
    fontSize,
    textColor,
    filter,
    width,
    height
  }
}

export default connect(mapStateToProps)(Cat)