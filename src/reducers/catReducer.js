const initialState = {
  text: '%20',
  fontSize: '50',
  textColor: 'white',
  filter: '',
  width: '',
  height: ''
}

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: action.text
      }
    case 'CHANGE_FONT_SIZE':
      return {
        ...state,
        fontSize: action.fontSize
      }
    case 'CHANGE_TEXT_COLOR':
      return {
        ...state,
        textColor: action.textColor
      }
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.filter
      }
    case 'CHANGE_WIDTH':
      return {
        ...state,
        width: action.width
      }
    case 'CHANGE_HEIGHT':
      return {
        ...state,
        height: action.height
      }
    default:
      return state
  }
}

export default catReducer
