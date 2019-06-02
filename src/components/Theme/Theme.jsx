import React from 'react'
import './Theme.scss'

const Theme = ({ handleThemeChange }) => (
  <div className="home-theme">
    <div className="theme-header">
      Theme
    </div>
    <div>
      <button className="theme-button blue" onClick={handleThemeChange('blue')} />
      <button className="theme-button green" onClick={handleThemeChange('green')} />
      <button className="theme-button purple" onClick={handleThemeChange('purple')} />
      <button className="theme-button orange" onClick={handleThemeChange('orange')} />
    </div>
  </div>
)

export default Theme