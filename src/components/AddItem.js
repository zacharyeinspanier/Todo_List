import React, { useState } from "react";

const AddItem = ({ addListItem }) => {
  const [item, setItem] = useState("");

  function onEnter(event) {
    event.preventDefault();
    addListItem(item);
    setItem("");
  }

  return (
    <form onSubmit={(event) => onEnter(event)}>
      <input
        value={item}
        onChange={(event) => setItem(event.target.value)}
        placeholder="Add To List"
        type="text"
      ></input>
    </form>
  );
};

export default AddItem;
