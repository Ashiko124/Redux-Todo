import React from 'react'
import {connect} from 'react-redux'
import {deleteItem} from '../actions/index'

let DeleteTodo = ({dispatch}) => {
    return (
        <div>
            <button type ='submit'> Remove Item</button>
        </div>
    )
}
DeleteTodo = connect()(DeleteTodo)

export default DeleteTodo