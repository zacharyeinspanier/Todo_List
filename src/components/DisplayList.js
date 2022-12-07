import React from "react";
import Add from "./Add";
import Delete from "./Delete";
import "../styles/DisplayList.css";

const DisplayList = ({ selectedList, addListItem, deletListItem }) => {
  return (
    <div className="SelectedListContainer">
      <h3>{selectedList.name}</h3>
      <ul>
        {selectedList.list.map((element, index) => {
          return (
            <div>
              <li key={element + index}>{element}</li>
              <Delete listOrItem={element} dltListOrItem={deletListItem}/>
            </div>
          );
        })}
        <li>
          <Add addListOrItem={addListItem} placeHolderTxt='Enter Item Name'/>
        </li>
      </ul>
    </div>
  );
};

export default DisplayList;
