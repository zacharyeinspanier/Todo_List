import React, { useState } from "react";
import CreateList from "./CreateList";
import SelectList from "./SelectList";
import DisplayList from "./DisplayList";

const App = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [selectedList, setSelectedList] = useState({ name: "", list: [] });

  //adds a new todo list with name: value
  function addList(value) {
    const newTodoList = [...todoLists, { name: value, list: [] }];
    setTodoLists(newTodoList);
  }

  //saves previous todo list and retrevies the todo list with name value
  function listSelected(value) {
    const currentName = selectedList.name;
    const currentList = selectedList.list;
    const newList = todoLists;

    // Find the previous todo list and save it's list
    newList.map((item) => {
      if (item.name === currentName) {
        item.list = currentList;
      }
    });
    setTodoLists(newList);

    //set the new list
    const nextList = todoLists.map((item) => {
      if (item.name === value) {
        setSelectedList(item);
      }
    });
  }

  function addListItem(value) {
    const newList = [...selectedList.list, value];
    setSelectedList((selectedList) => ({ ...selectedList, list: newList }));
  }

  function deleteList(){
    const listName = selectedList.name;
    const newList = todoLists;

    //search list for selected and deleted it
    for(let i = 0; i< newList.length; ++i){
      if(newList[i].name === listName){
        newList.splice(i,1)
        break;
      }
    }
    setTodoLists(newList);
    setSelectedList({ name: "", list: [] })
  }

  return (
    <div>
      <CreateList onButtonClick={addList} />
      <SelectList list={todoLists} onListSelect={listSelected} />
      <DisplayList selectedList={selectedList} addItem={addListItem} deleteList={deleteList}/>
    </div>
  );
};

export default App;
