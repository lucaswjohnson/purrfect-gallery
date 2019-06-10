import React from 'react'
import './Theme.scss'
import { connect } from 'react-redux'
import { handleThemeChange } from '../../actions/index'

const Theme = ({ dispatch }) => (
  <div className="home-theme">
    <div className="theme-header">
      Theme
    </div>
    <div>
      <button className="theme-button blue" onClick={() => dispatch(handleThemeChange('blue'))} />
      <button className="theme-button green" onClick={() => dispatch(handleThemeChange('green'))} />
      <button className="theme-button purple" onClick={() => dispatch(handleThemeChange('purple'))} />
      <button className="theme-button orange" onClick={() => dispatch(handleThemeChange('orange'))} />
    </div>
  </div>
)

export default connect()(Theme)