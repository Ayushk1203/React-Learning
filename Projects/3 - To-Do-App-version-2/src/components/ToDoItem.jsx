const ToDoItem = ({todoitem})=>{
    return (
        <>
        <div class="container">
      <div class="row ak-row">
        <div className="col-6" key={todoitem.item}>{todoitem.item}</div>
        <div className="col-4" key={todoitem.date}>{todoitem.date}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger ak-button">
            Delete
          </button>
        </div>
      </div>
    </div>
        </>
    )
}

export default ToDoItem;