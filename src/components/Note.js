import React from "react";


const Note = ({selectedList, updateNote}) => {

  // Steps:
  // 1: change the note when the selected list chances
  // 2: update the note and save it when the note value changes
    //Could create a method to do this
  //console.log(selectedList.content.note);

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
