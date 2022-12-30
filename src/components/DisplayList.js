import React, {useEffect} from "react";
import Note from "./Note";
import List from "./List";
import NoteList from "./NoteList"
import "../styles/DisplayList.css";

const DisplayList = ({ selectedList, setSelectedList }) => {
  
  useEffect(()=>{}, [selectedList])

  function handleClick(element) {

    //set the state
    setSelectedList((selectedList) => ({
      ...selectedList,
      content: {
        ...selectedList.content,
        list: selectedList.content.list.map((item)=>{
          if(item.value === element.value){
            return({value: item.value, strike: !element.strike})
          }
          return item;
        })
      },
    }));
  }

  function deletListItem(itemName) {
   
    setSelectedList((selectedList) => ({
      ...selectedList,
      content: { ...selectedList.content, list: selectedList.content.list.filter(
        (item) => item.value !== itemName)
      }}));

  }

  function addListItem(item) {
    if (item === "") {
      return;
    }
    // check for dups => dups are not allowed
    for(let i = 0; i < selectedList.content.list.length; ++i){
      if (selectedList.content.list[i].value === item){
        return;
      }
    }
    //create item
    const newItem = { value: item, strike: false };
    // update the list state
    setSelectedList((selectedList) => ({
      ...selectedList,
      content: { ...selectedList.content, list: [...selectedList.content.list, newItem] },
    }));
  }

  function updateNote(newNote) {
    setSelectedList((selectedList) => ({
      ...selectedList,
      content: { ...selectedList.content, note: newNote },
    }));
  }

  if (selectedList.name === "") {
    return <div></div>;
  }
  else if(selectedList.type === "Note"){
    return(<Note selectedList={selectedList} updateNote={updateNote}/>)
  }
  else if(selectedList.type === "List"){

    return(<List selectedList={selectedList} deletListItem={deletListItem} addListItem={addListItem} handleClick={handleClick}/>)
  }
  else if(selectedList.type === "Note+List"){
    return(<NoteList selectedList={selectedList} updateNote={updateNote} deletListItem={deletListItem} addListItem={addListItem} handleClick={handleClick}/>)
  }
  else{
    return <div></div>;
  }
}

export default DisplayList;
