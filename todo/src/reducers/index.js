import  {combineReducers} from 'redux'
import {ADDITEM, TOGGLEITEM, DELETEITEM} from '../actions/index';

const initialState = [{title: 'Walk the dog.', effort: 0, value: 0}]



function todos(state = initialState, action) {
    switch (action.type) {
        case ADDITEM:
            return [...state, action.payload];
                    // return Object.assign({}, state, {
                    //     title: action.payload
                    // })
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