const ToDoItem = ({todoname, tododate, handleOnDelete})=>{
    return (
        <>
        <div class="container">
      <div class="row ak-row">
        <div className="col-6" >{todoname}</div>
        <div className="col-4" >{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ak-button" onClick={() => handleOnDelete(todoname)}>
             Delete
          </button>
        </div>
      </div>
    </div>
        </>
    )
}

export default ToDoItem;