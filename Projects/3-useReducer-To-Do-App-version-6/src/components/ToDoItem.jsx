import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { toDoItemsContext } from "../store/to-Do-Items-store";

const ToDoItem = ({todoname,tododate})=>{
    
    const {deleteItem} = useContext(toDoItemsContext);
    
    return (
        <>
        <div class="container">
      <div class="row ak-row">
        <div className="col-6" >{todoname}</div>
        <div className="col-4" >{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ak-button" onClick={()=>deleteItem(todoname)}>
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
        </>
    )
}

export default ToDoItem;