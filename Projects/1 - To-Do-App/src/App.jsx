import AppName from './components/AppName';
import AddToDo from './components/AddToDo';
import ToDoItem1 from './components/ToDoItem1';
import ToDoItem2 from './components/ToDoItem2';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo/>
      <div className="items-container">
      <ToDoItem1/>
      <ToDoItem2/>
      </div>
      
    </center>
  );
}

export default App;
