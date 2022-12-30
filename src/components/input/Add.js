import React, { useState } from "react";

const Add = ({ addListItem, placeHolderTxt }) => {
  const [inputTxt, setinputTxt] = useState("");

  function onEnter(event) {
    event.preventDefault();
    addListItem(inputTxt);
    setinputTxt("");
  }

  return (
    <form onSubmit={(event) => onEnter(event)}>
      <input
        className = "addInput"
        value={inputTxt}
        onChange={(event) => setinputTxt(event.target.value)}
        placeholder={placeHolderTxt}
        type="text"
        autoFocus
      ></input>
    </form>
  );
};

export default Add;
