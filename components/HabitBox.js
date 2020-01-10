import React from 'react'

const box_style = {
    width: "20px",
    height: "20px",
    border: "2px solid"
}

function HabitBox(props) {
    return (
        <>
            <p style={box_style}></p>
            <p>Hello { props.name }</p>
        </>
    )
}

export default HabitBox
