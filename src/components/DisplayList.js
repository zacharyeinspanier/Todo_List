import React from "react";
import Add from "./Add";
import Delete from "./Delete";
import TextNote from "./TextNote";
import "../styles/DisplayList.css";

const DisplayList = ({ selectedList, setSelectedList }) => {

  //State with list of strike keys


  function handleClick(event, id) {
    console.log(id);
    if (event.target.className === "") {
      event.target.className = "strikeThrough";
    } else {
      event.target.className = "";
    }
    return;
  }

  function deletListItem(item) {
    //get list items
    const newList = [...selectedList.content.list];

    //Map through, find list item, remove
    newList.map((listItem, index) => {
      if (listItem === item) {
        newList.splice(index, 1);
        return;
      }
    });

    setSelectedList((selectedList) => ({
      ...selectedList,
      content: { ...selectedList.content, list: newList },
    }));
  }

  function addListItem(item) {
    if(item === ""){
      return;
    }
    //new list of items
    const newList = [...selectedList.content.list, item];
    // update the list state
    setSelectedList((selectedList) => ({
      ...selectedList,
      content: { ...selectedList.content, list: newList },
    }));
  }

  function updateNote(newNote) {
    setSelectedList((selectedList) => ({
      ...selectedList,
      content: { ...selectedList.content, note: newNote },
    }));
  }

  if(selectedList.name ===""){
    return(<div></div>)
  }
  return (
    <div className="SelectedListContainer">
      <h3>{selectedList.name}</h3>
      <div className="ListContentContainer">
        <TextNote selectedList={selectedList} updateNote={updateNote} />
        <ul>
          {selectedList.content.list.map((element, index) => {
            return (
              <div className="ListItemContainer">
                <li key={element+index}>{element}</li>
                <Delete listOrItem={element} dltListOrItem={deletListItem} />
              </div>
            );
          })}
          <Add addListOrItem={addListItem} placeHolderTxt="Enter Item Name" />
        </ul>
      </div>
      
    </div>
  );
};

export default DisplayList;
