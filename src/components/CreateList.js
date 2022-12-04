import React, { useState } from "react";
import "../styles/createlist.css";

const CreateList = ({ onButtonClick }) => {
  const [listName, setListName] = useState("");

  function buttonClick(event) {
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
