import React, { useRef } from "react";
import Add from "./Add.js";
import Delete from "./Delete.js";
import "../styles/ListManager.css";

const ListManager = ({ todoLists, addNewList, selectNewList, deleteList }) => {
  const ref = useRef(null);
  //update ref to the currently selected menu item
  function listSelect(event, list) {
    if (ref.current != null) {
      //remove class name from current ref
      ref.current.className = "";
      //set new ref
      ref.current = event.target;
      //set classname
      ref.current.className = "selectList";
    } else {
      //set the ref
      ref.current = event.target;
      //change class name
      ref.current.className = "selectList";
    }
    selectNewList(list);
    return;
  }

  return (
    <div className="AllTodoListsContainer">
      <h3>All Lists</h3>
      <div>
        <ul className="TodoListNavMenu">
          {todoLists.length === 0
            ? null
            : todoLists.map((todoList, index) => {
                return (
                  <div className="TodoListContainer">
                    <li
                      className=""
                      key={todoList.name + index}
                      onClick={(event) => listSelect(event, todoList)}
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
