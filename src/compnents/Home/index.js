import React from "react";
import TodoApp from './todo2'
function index() {
  return (
    <div className='containerApp'>
      <div className="subContainerApp">
    <div className="headers">ToDo List</div>
      <div className="mainD">
        <div className="mainDiv">
          <div className="heading">
            ToDo List
          </div>
          <TodoApp/>      
        </div>
      </div>
      </div>
    </div>
  );
}

export default index;
