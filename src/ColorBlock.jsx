import React from 'react'

const ColorBlock = (props) => {
    return (
        <div className="ColorBlock"
        style={{'backgroundColor': props.color}}>
        <p>{props.color}</p>
        </div>
    )
}

// Do not forget to export your component once you have built it!

export default ColorBlock