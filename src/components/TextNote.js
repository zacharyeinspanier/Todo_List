import React, { useState, useEffect } from "react";

const TextNote = ({ selectedList, updateNote }) => {
  const [note, setNote] = useState("");

  useEffect(() => {
    // setNote when selectedList is changed
    setNote(selectedList.content.note);
  }, [selectedList]);

  // Set the initial value to note
  // update selectedList.contet.note
  return (
    <textarea
      className="note"
      type="text"
      placeholder="Type a note..."
      value={note}
      onChange={(event) => updateNote(event.target.value)}
    />
  );
};

export default TextNote;
