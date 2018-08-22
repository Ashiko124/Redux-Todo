export const ADDITEM = 'ADDITEM';
export const DELETEITEM = 'DELETEITEM';
export const TOGGLEITEM = 'TOGGLEITEM';

export const addItem = (value) => {
    return {
        type: ADDITEM,
        value
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETEITEM,
        id
    }
}

export const toggleItem = (value) => {
    return {
        type: TOGGLEITEM,
        value
    }
}

