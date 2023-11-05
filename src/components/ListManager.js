import React, { useRef } from "react";
import Add from "./input/Add.js";
import Delete from "./input/Delete.js";
import OptionMenu from "./input/OptionMenu.js";
import "../styles/ListManager.css";

/**
 * Dsiplays the list of lists from state(reducer state)
 * 
 * @param {state, addNewList, selectNewList, deleteList, changedListType} param Functions from App.js
 * @returns 
 */
const ListManager = ({ state, addNewList, selectNewList, deleteList, changedListType }) => {
  const ref = useRef(null);
  /**
   * Update ref to the currently selected menu item
   * Call selectedNewList with list.name
   * 
   * @param {click} event click event
   * @param {object} list the list item that was clicked
   * @returns 
   */
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
    selectNewList(list.name);
    return;
  }

  //JSX
  return (
    <div className="AllTodoListsContainer">
      <h3>All Lists</h3>
      <div>
        <ul className="TodoListNavMenu">
          {state.length === 0
            ? null
            : state.map((item, index) => {
                return (
                  <div className="TodoListContainer">
                    <li
                      className=""
                      key={item.name + index}
                      onClick={(event) => listSelect(event, item)}
                    >
                      {item.name}
                    </li>
                    <OptionMenu item={item.name} changedListType= {changedListType} />
                    <Delete item={item.name} deletListItem={deleteList} />
                  </div>
                );
              })}
          <li>
            <Add addListItem={addNewList} placeHolderTxt="Enter List Name" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListManager;
