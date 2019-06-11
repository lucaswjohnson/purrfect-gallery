import { combineReducers } from 'redux'
import themeReducer from './themeReducer'
import catReducer from './catReducer'

export default combineReducers({
  themeReducer,
  catReducer
})