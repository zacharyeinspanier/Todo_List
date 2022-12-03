import React, { useState } from "react";

const CreateList = ({ onButtonClick }) => {
  const [listName, setListName] = useState("");

  function buttonClick(event) {
    //Prevent page reload
      event.preventDefault();
      onButtonClick(listName);
  }


  return (
    <div>
      Enter List Name
      <input
        placeholder="enter a list name"
        value={listName}
        onChange={event => setListName(event.target.value)}
      />
      <button onClick={buttonClick}>CreateList</button>
    </div>
  );
};

export default CreateList;
