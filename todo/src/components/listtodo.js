import React from 'react';

const Listtodo = (props) => {
    return (
        console.log(props),
          props.todos.map(todo => <div>{todo.value}</div>)
    )
}

export default Listtodo;