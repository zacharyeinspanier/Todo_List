import React from "react";
import Add from "./Add";
import Delete from "./Delete";
import TextNote from "./TextNote";
import "../styles/DisplayList.css";

const DisplayList = ({ selectedList, setSelectedList }) => {
  //const [selectedList, setSelectedList] = useState({ name: "", content: {note: "", list:[{ value: "", strike: False}]});

  //State with list of strike keys

  function handleClick(element) {
    //toggle between t and f
    const toggleStrike = !element.strike;

    // create a new list
    const newList = selectedList.content.list

    // map through and find the elemnt.value
    newList.map((todoListItem)=>{
      if(todoListItem.value === element.value){
        todoListItem.strike = toggleStrike;
        return;
      }
    })

    //set the state
    setSelectedList((selectedList) => ({
      ...selectedList,
      content: {
        ...selectedList.content,
        list: newList
      },
    }));

    return;
  }

  function deletListItem(item) {
    //get list items
    const newList = [...selectedList.content.list];

    //Map through, find list item, remove
    newList.map((listItem, index) => {
      if (listItem.value === item) {
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
    if (item === "") {
      return;
    }
    const newItem = { value: item, strike: false };
    //new list of items
    const newList = [...selectedList.content.list, newItem];
    // update the list state
    setSelectedList((selectedList) => ({
      ...selectedList,
      content: { ...selectedList.content, list: newList },
    }));
  }

  function updateNote(newNote) {
    console.log("state is set")
    setSelectedList((selectedList) => ({
      ...selectedList,
      content: { ...selectedList.content, note: newNote },
    }));
  }

  if (selectedList.name === "") {
    return <div></div>;
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
                <li
                  key={element.value + index}
                  onClick={() => handleClick(element)}
                  className = {`strike${element.strike.toString()}`}
                >
                  {element.value}
                </li>
                <Delete
                  listOrItem={element.value}
                  dltListOrItem={deletListItem}
                />
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
