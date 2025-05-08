import {createContext} from 'react';

export const toDoItemsContext = createContext({
    toDoItems : [],
    addnewItem : () => {},
    deleteItem : () =>{}
});