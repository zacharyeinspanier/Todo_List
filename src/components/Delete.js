import React from "react";

const Delete = ({ listOrItem, dltListOrItem }) => {
  function clickDel() {
    dltListOrItem(listOrItem);
  }

  return (
    <button className="DeleteBtn" onClick={clickDel}>
      X
    </button>
  );
};

export default Delete;
