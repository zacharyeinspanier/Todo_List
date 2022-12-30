import React, { useState, useEffect } from "react";

const TextNote = ({ selectedList, updateNote }) => {
  const [note, setNote] = useState("");

  useEffect(() => {
    // setNote when selectedList is changed
    setNote(selectedList.content.note);
  }, [selectedList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateNote(note);
    }, 500);
    return () => clearTimeout(timer);
  }, [note]);

  // Set the initial value to note
  // update selectedList.content.note
  return (
    <textarea
      className="note"
      type="text"
      placeholder="Type a note..."
      value={note}
      onChange={(event) => setNote(event.target.value)}
    />
  );
};

export default TextNote;
