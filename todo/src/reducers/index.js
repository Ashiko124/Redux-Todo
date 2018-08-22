import  {combineReducers} from 'redux'
import {ADDITEM, TOGGLEITEM, DELETEITEM} from '../actions/index';

const initialState = [{value: 'Walk the dog.', completed: false}, {value: 'Walk the cat.', completed: false}]



function todos(state = initialState, action) {
    switch (action.type) {
        case ADDITEM:
            return [...state,{value:action.value, completed: false}]
        case TOGGLEITEM:
            return ( console.log("State is: " + typeof state),state.map((todo, value) => {
                if(value === action.value) {
                    return Object.assign([], todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            }))
        case DELETEITEM:
            return state.map((todo, id) => {
                if(id === action.id) {
                    return todos.splice(id, 1);
                }
                return todo
            })
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos 
})

export default todoApp