import React, { useState } from "react";

const CreateList = ({ onButtonClick }) => {
  const [listName, setListName] = useState("Enter List Name");

  function buttonClick(event){
    //Prevent page reload
    event.preventDefault();
    onButtonClick(listName);
  }

  return (
    <div>
      Enter List Name
      <input
        value={listName}
        onChange={(event) => setListName(event.target.value)}
      />
        <button onClick={buttonClick}>CreateList</button>
    </div>
  );
};

export default CreateList;
