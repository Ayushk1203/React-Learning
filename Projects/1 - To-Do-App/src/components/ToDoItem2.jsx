function ToDoItem2() {

  let item ='Go to College';
  let date ='4/10/2023';
  return (
    <div class="container">
      <div class="row ak-row">
        <div class="col-6">{item}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          
          <button type="button" class="btn btn-danger ak-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem2;
