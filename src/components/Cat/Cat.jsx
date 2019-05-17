import React from 'react';

const Cat = ({
  text = '%20', fontSize = '50', textColor = 'white',
  filter = '', width = '', height = '', id = Math.random()
}) => (
  <img
    src={`https://cataas.com/cat/says/${text}?s=${fontSize}&c=${textColor}
          &filter=${filter}&width=${width}&height=${height}&id=${id}`}
    alt={`Cute Kitty ${id}`}
  />
)

export default Cat