import ToDoItem from './ToDoItem';

const ToDoItems = ({toDoItems,handleOnDelete}) =>{
    return (
        <>
        <div className="items-container">
        {toDoItems.map(Item => <ToDoItem key={Item.item} todoname={Item.item} tododate={Item.date} handleOnDelete={handleOnDelete}/>)}
        </div>
        </>
    )
}

export default ToDoItems;