import React, { useState } from "react";

const CreateList = ({addNewList}) => {
  const [listName, setListName] = useState("");

  function onEnter(event) {
    //Prevent page reload
    event.preventDefault();
    addNewList(listName);
    setListName("");
  }

  return (
    <div>
      <form onSubmit={(event) => onEnter(event)}>
        <input
          type="text"
          placeholder="enter a list name"
          value={listName}
          onChange={(event) => setListName(event.target.value)}
        />
      </form>
    </div>
  );
};

export default CreateList;
