import React, { useState } from "react";

/**
 * Displays the add option for a state item
 * 
 * @param {addListItem, placeHolderTxt } param: function from App.js and placeholder text for form
 * @returns 
 */
const Add = ({ addListItem, placeHolderTxt }) => {
  const [inputTxt, setinputTxt] = useState("");

  function onEnter(event) {
    event.preventDefault();
    addListItem(inputTxt);
    setinputTxt("");
  }
  //JSX
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
