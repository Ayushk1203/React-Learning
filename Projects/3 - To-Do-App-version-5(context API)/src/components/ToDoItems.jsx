import ToDoItem from './ToDoItem';
import { toDoItemsContext } from '../store/to-Do-Items-store';
import { useContext } from 'react';
const ToDoItems = () =>{
    const {toDoItems} = useContext(toDoItemsContext);
    return (
        <>
        <div className="items-container">
        {toDoItems.map(Item => <ToDoItem key={Item.item} todoname={Item.item} tododate={Item.date} />)}
        </div>
        </>
    )
}

export default ToDoItems;