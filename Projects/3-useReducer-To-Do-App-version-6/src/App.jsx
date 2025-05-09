import AppName from './components/AppName';
import AddToDo from './components/AddToDo';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoItems from './components/ToDoItems';
import ErrorMessage from './components/ErrorMessage';
import ToDoItemsContextProvider from './store/to-Do-Items-store';

function App() {
  return (
    <ToDoItemsContextProvider>
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo />
      <ErrorMessage />
      <ToDoItems />
    </center>
    </ToDoItemsContextProvider>
  );
}

export default App;
