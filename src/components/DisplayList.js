import React from "react";
import Add from "./Add";
import Delete from "./Delete";
import "../styles/DisplayList.css";

const DisplayList = ({ selectedList, addListItem, deletListItem }) => {
  var addItemClassName = "";
  if (selectedList.name === "") {
    addItemClassName = "hide";
  } else {
    addItemClassName = "";
  }

  function strikeItem(event) {
    if (event.target.className === "") {
      event.target.className = "strikeThrough";
    } else {
      event.target.className = "";
    }
    return;
  }

  return (
    <div className="SelectedListContainer">
      <h3>{selectedList.name}</h3>
      <ul>
        {selectedList.list.map((element, index) => {
          return (
            <div className="ListItemContainer">
              <li
                id={element + index}
                key={element + index}
                onClick={(event) => strikeItem(event)}
              >
                {element}
              </li>
              <Delete listOrItem={element} dltListOrItem={deletListItem} />
            </div>
          );
        })}
        <li className={addItemClassName}>
          <Add addListOrItem={addListItem} placeHolderTxt="Enter Item Name" />
        </li>
      </ul>
    </div>
  );
};

export default DisplayList;
