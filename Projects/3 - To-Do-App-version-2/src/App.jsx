import AppName from './components/AppName';
import AddToDo from './components/AddToDo';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoItem from './components/ToDoItem';
function App() {

  const toDoItems = [{
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
     }

  ]

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo/>
      <div className="items-container">
      {toDoItems.map(Item => <ToDoItem key={Item.item} todoitem={Item}/>)};
      
      
      </div>
      
    </center>
  );
}

export default App;
