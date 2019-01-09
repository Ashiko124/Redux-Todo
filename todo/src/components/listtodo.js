import React from 'react';
import Todo from './todo';
import { connect } from 'react-redux'
import { toggleItem} from '../actions/index'
// import DeleteTodo from '../Containers/deletetodo'


const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {console.log(todos)}
        {console.log(typeof todos)}
        {todos.map( (todo, value)  => (
            <Todo {...todo} onClick={() => onTodoClick(value)}/>
        ))}
    </ul>
)

const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      onTodoClick: id => {
        dispatch(toggleItem(id))
    //   },
    //   onDeleteClick: id => {
    //       dispatch(deleteItem(id))
      }
    }
  }
  
  const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)

export default VisibleTodoList