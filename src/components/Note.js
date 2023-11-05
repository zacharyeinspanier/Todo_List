import React from "react";


/**
 * JSX for a note
 * 
 * @param {selectedList, updateNote} param: state and function from DisplayList.js
 * @returns 
 */
const Note = ({selectedList, updateNote}) => {

  return (
    <div className="SelectedListContainer">
      <h3>{selectedList.name}</h3>
      <div className="ListContentContainer">
        <textarea
          className="note"
          type="text"
          placeholder="Type a note..."
          value={selectedList.content.note}
          onChange={(event) => updateNote(event.target.value)}
        />

      </div>
    </div>
  );
};
export default Note;
