import {createContext} from 'react';
import {useReducer} from 'react';

export const toDoItemsContext = createContext({
    toDoItems : [],
    addnewItem : () => {},
    deleteItem : () =>{}
});

const toDoItemReducer = (currToDoItems, action) =>{
    let newToDoItems = currToDoItems; 
    if(action.type === 'NEW_ITEM'){
      newToDoItems = [...currToDoItems,{item: action.payload.toDoName, date:action.payload.toDoDate}];
    }else if(action.type === 'DELETE_ITEM'){
      newToDoItems = currToDoItems.filter(Item => Item.item !== action.payload.todoname);
    }
  
    return newToDoItems;
  }



const ToDoItemsContextProvider = ({children})=>{
    const [toDoItems,dispatchToDoItems] = useReducer(toDoItemReducer,[]);

    const addnewItem = (toDoName,toDoDate) =>{
      
      const addNewItem = {
        type : "NEW_ITEM",
        payload : {
          toDoName,
          toDoDate
        }
      }
  
      dispatchToDoItems(addNewItem);
    }
  
    const deleteItem = (todoname)=>{
      const deleteItemAction = {
        type: 'DELETE_ITEM',
        payload : {
          todoname
        }
      }
      dispatchToDoItems(deleteItemAction);
      
    }

    return <toDoItemsContext.Provider 
    value={{toDoItems,addnewItem,deleteItem}}>
        {children}
    </toDoItemsContext.Provider>
}

export default ToDoItemsContextProvider;