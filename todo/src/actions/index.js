export const ADDITEM = 'ADDITEM';
export const DELETEITEM = 'DELETEITEM';
export const EDITITEM = 'EDITITEM';
export const READITEM = 'READITEM';
export const TOGGLEITEM = 'TOGGLEITEM';


export const readItem  = () => {
    return {
        type: READITEM
    };
};

export const addItem = () => {
    return {
        type: ADDITEM
        
    }
}

export const editItem = () => {
    return {
        type: EDITITEM
        
    }
}

export const deleteItem = () => {
    return {
        type: DELETEITEM
        
    }
}

export const toggleItem = () => {
    return {
        type: TOGGLEITEM
    }
}
