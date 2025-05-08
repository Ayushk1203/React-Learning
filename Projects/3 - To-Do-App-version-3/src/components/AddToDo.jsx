import { IoIosAddCircle } from "react-icons/io";
import {useState} from 'react';

function AddToDo ({handleToDoItem}){

    const [toDoName,setToDoName] = useState();
    const [toDoDate,setToDoDate] = useState();

    const handleToDoName = (event)=>{
      let name = event.target.value;
      setToDoName(name);

    }

    const handleToDoDate = (event) =>{
      let date = event.target.value;
      setToDoDate(date);
    }

    const handlenewitem = ()=>{
      handleToDoItem(toDoName,toDoDate);
      setToDoName("");
      setToDoDate("");
    }

    return (
      <div class="container">
        <div class="row ak-row">
            <div class="col-6">
              <input type="text" value={toDoName} placeholder="Enter Todo Here" onChange={(event)=>handleToDoName(event)}/>
            </div>
            <div class="col-4"><input type="date"  value={toDoDate} onChange={(event) =>handleToDoDate(event)} /></div>
            <div class="col-2"><button type="button" class="btn btn-success ak-button" onClick={handlenewitem}><IoIosAddCircle /></button>
            </div>

          </div>
        </div>
          
    )
}

export default AddToDo;