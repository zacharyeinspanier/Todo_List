import React from "react";
import CreateList from "./CreateList";
import "../styles/ListManager.css";

const ListManager = ({ todoLists, addNewList, selectNewList }) => {
  return (
    <div className='AllTodoListsContainer'>
      <h3>All Lists</h3>
      <div >
        <ul>
          {
            todoLists.length === 0 ? null : 
              todoLists.map((todoList) => {
                return (
                  <li onClick={() => selectNewList(todoList)}>{todoList.name}</li>
                );})
          }
          <li>
            <CreateList addNewList={addNewList} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListManager;
