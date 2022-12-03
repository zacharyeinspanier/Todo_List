import React from "react";
import CreateList from "./CreateList";

const App = () => {
  function buttonClicked(value) {
    console.log(value);
  }

  return (
    <div>
      <CreateList onButtonClick={buttonClicked} />
      <div>

      </div>
    </div>
  );
};

export default App;
