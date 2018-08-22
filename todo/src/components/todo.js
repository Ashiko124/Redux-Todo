import React from 'react'


const Todo = ({onClick, completed, value}) => (
    <ul onClick={onClick} style={ {textDecoration: completed ? 'line-through' : 'none'}}>
        {value}
    </ul>
)

export default Todo

