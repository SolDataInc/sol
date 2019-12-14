import React from 'react'

function HabitBox(props) {
    if (props.name == 'Evan') {
        return (
            <p>Hello pussy</p>
        )
    }
    return (
        <p>Hello { props.name }</p>
    )
}

export default HabitBox
