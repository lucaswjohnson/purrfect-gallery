import React from 'react'
import './Gallery.scss'
import Cat from '../Cat/Cat'

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-column">
        <Cat />
        <Cat />
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="gallery-column">
        <Cat />
        <Cat />
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="gallery-column">
        <Cat />
        <Cat />
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="gallery-column">
        <Cat />
        <Cat />
        <Cat />
        <Cat />
        <Cat />
      </div>
    </div>
  )
}

export default Gallery