import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ColorBlock from './ColorBlock'

const App = () => {
  let colors = [
    'violet', 'blue', 
    'lightblue', 'green', 
    'greenyellow', 'yellow', 
    'orange', 'red'
  ]

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })
  return (
    <div className="App"> 
      {colorMap}
    </div>
  )
}

export default App;
