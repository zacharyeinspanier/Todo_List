import React from "react";
import TextNote from "./input/TextNote";

const Note = ({selectedList, updateNote}) => {
  return (
    <div className="SelectedListContainer">
      <h3>{selectedList.name}</h3>
      <div className="ListContentContainer">
        <TextNote selectedList={selectedList} updateNote={updateNote} />
      </div>
    </div>
  );
};

export default Note;
