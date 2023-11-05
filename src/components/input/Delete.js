import React from "react";

/**
 * Displays the delete option for a state item
 * 
 * @param {item, deletListItem } param: the state item and function from App.js
 * @returns 
 */
const Delete = ({ item, deletListItem }) => {
  function clickDel() {
    deletListItem(item);
  }
  // JSX
  return (
    <button className="DeleteBtn" onClick={clickDel}>
      X
    </button>
  );
};

export default Delete;
