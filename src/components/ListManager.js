import React from "react";
import Add from "./Add.js";
import Delete from "./Delete.js";
import "../styles/ListManager.css";

const ListManager = ({ todoLists, addNewList, selectNewList, deleteList }) => {
  return (
    <div className="AllTodoListsContainer">
      <h3>All Lists</h3>
      <div>
        <ul>
          {todoLists.length === 0
            ? null
            : todoLists.map((todoList, index) => {
                return (
                  <div className="TodoListContainer">
                    <li
                      key={todoList.name + index}
                      onClick={() => selectNewList(todoList)}
                    >
                      {todoList.name}
                    </li>
                    <Delete listOrItem={todoList} dltListOrItem={deleteList} />
                  </div>
                );
              })}
          <li>
            <Add addListOrItem={addNewList} placeHolderTxt="Enter List Name" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListManager;
