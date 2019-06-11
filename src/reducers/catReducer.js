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
    case 'CHANGE_GALLERY':
      return {
        ...state,
        text: action.text,
        fontSize: action.fontSize,
        textColor: action.textColor,
        filter: action.filter,
        width: action.width,
        height: action.height
      }
      default:
        return state
  }
}

export default catReducer
