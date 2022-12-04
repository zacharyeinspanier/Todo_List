import React, { useState } from "react";

const AddItem = ({displayContent, addItem}) => {
  const [item, setItem] = useState("");

  function onEnter(event) {
    event.preventDefault();
    addItem(item);
  }
  return (
    <li calssName='showTodoList'>
      <form onSubmit={(event) => onEnter(event)}>
        <input
          value={item}
          onChange={(event) => setItem(event.target.value)}
          placeholder="Add To List"
          type="text"
        ></input>
      </form>
    </li>
  );
};

export default AddItem;
