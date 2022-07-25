import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ColorBlock from './ColorBlock'

const App = () => {
  let [colors, useColors] = ([
    'violet', 'blue', 
    'lightblue', 'green', 
    'greenyellow', 'yellow', 
    'orange', 'red'
  ])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })
  return (
    <div className="App"> 
      {colors.map((color, i) => 
        <ColorBlock key= color={color} />
      )}
    </div>
  )
    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )

}
 
export default App;
