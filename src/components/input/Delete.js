import React from "react";

const Delete = ({ item, deletListItem }) => {
  function clickDel() {
    deletListItem(item);
  }

  return (
    <button className="DeleteBtn" onClick={clickDel}>
      X
    </button>
  );
};

export default Delete;
