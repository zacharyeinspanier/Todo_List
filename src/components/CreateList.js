import React, { useState } from "react";

const CreateList = ({ onEnterAdd }) => {
  const [listName, setListName] = useState("");

  function onEnter(event) {
    //Prevent page reload
    event.preventDefault();
    onButtonClick(listName);
  }


  return (
    <div className="createList">
      <label>
        <div>Enter List Name</div>
      </label>
      <div>
        <input
          placeholder="enter a list name"
          value={listName}
          onChange={(event) => setListName(event.target.value)}
        />
        <button onClick={buttonClick}>CreateList</button>
      </div>
    </div>
  );
};

export default CreateList;
