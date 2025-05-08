import { IoIosAddCircle } from "react-icons/io";
import {useState,useRef} from 'react';


function AddToDo ({handleToDoItem}){

    
    const toDoNameElement = useRef();
    const toDoDateElement = useRef();

    

    const handlenewitem = (event)=>{
      event.preventDefault();
      let toDoName =toDoNameElement.current.value; 
      let toDoDate= toDoDateElement.current.value;
      handleToDoItem(toDoName,toDoDate);

      
    }

    return (
      <form className="container" onSubmit={handlenewitem}>
        <div className="row ak-row">
            <div className="col-6">
              <input type="text" ref={toDoNameElement} placeholder="Enter Todo Here" />
            </div>
            <div className="col-4"><input type="date"  ref={toDoDateElement}  /></div>
            <div className="col-2"><button type="submit" className="btn btn-success ak-button"  /*onClick={handlenewitem}*/><IoIosAddCircle /></button>
            </div>

          </div>
        </form>
          
    )
}

export default AddToDo;