import React, { useState } from "react";
import "../styles/createlist.css";

const CreateList = ({ onEnterAdd }) => {
  const [listName, setListName] = useState("");

  function onEnter(event) {
    //Prevent page reload
    event.preventDefault();
    onEnterAdd(listName);
    setListName("");
  }

  return (
      <form onSubmit={(event) => onEnter(event)}>
        <input
          placeholder="enter a list name"
          type="text"
          value={listName}
          onChange={(event) => setListName(event.target.value)}
        />
      </form>
  );
};

export default CreateList;
