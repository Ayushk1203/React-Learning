import AppName from './components/AppName';
import AddToDo from './components/AddToDo';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoItems from './components/ToDoItems';
import {useState} from 'react';

function App() {

  let [toDoItems,setToDoItems] = useState([{
    item : 'Buy Milk',
    date : '4/10/2023'
   },
   {
     item : 'Go To College',
     date : '4/10/2023'
    },
    {
     item : 'Buy 1 kg Rice',
     date : '5/10/2024'
    }]); 

  const handleToDoItem = (toDoName,toDoDate) =>{
    let newToDoItem = {item:toDoName,date:toDoDate};
    let newToDoList = [...toDoItems,newToDoItem];
    setToDoItems(newToDoList);
  }

  const handleOnDelete = (todoname)=>{
    const newList = toDoItems.filter(listItem => listItem.item !== todoname);
    setToDoItems(newList);
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo handleToDoItem={handleToDoItem}/>
      <ToDoItems toDoItems={toDoItems} handleOnDelete={handleOnDelete}/>
    </center>
  );
}

export default App;
