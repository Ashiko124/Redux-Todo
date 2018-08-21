import {ADDITEM, DELETEITEM, EDITITEM, READITEM, TOGGLEITEM} from '../actions/index';

const initialState = {
    todos: [{value: 'Walk the dog.', completed: false}]
}


export default (state  = initialState, action) => {
    switch (action.type) {
        case ADDITEM:
            return;
        case DELETEITEM:
            return; 
        case EDITITEM:
            return;
        case READITEM:
            return;
        case TOGGLEITEM:
            return;
        default: 
            return state;
    }
};