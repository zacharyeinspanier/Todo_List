import React, { useState } from "react";

const Add = ({ addListOrItem, placeHolderTxt }) => {
  const [inputTxt, setinputTxt] = useState("");

  function onEnter(event) {
    event.preventDefault();
    addListOrItem(inputTxt);
    setinputTxt("");
  }

  return (
    <form onSubmit={(event) => onEnter(event)}>
      <input
        value={inputTxt}
        onChange={(event) => setinputTxt(event.target.value)}
        placeholder={placeHolderTxt}
        type="text"
      ></input>
    </form>
  );
};

export default Add;