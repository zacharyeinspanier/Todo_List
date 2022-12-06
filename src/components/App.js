import React, { useState } from "react";
import ListManager from "./ListManager";
import DisplayList from "./DisplayList";
import "../styles/TodoListApp.css"

const App = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [selectedList, setSelectedList] = useState({ name: "", list: [] });

  //adds a new todo list with name: value
  function addNewList(value) {
    const newTodoList = [...todoLists, { name: value, list: [] }];
    setTodoLists(newTodoList);
  }

  //saves previous todo list and retrevies the todo list with name value
  function selectNewList(todoList) {
    const tempList = todoLists;

    console.log(selectedList.list);
    // Find the previous todo list
    tempList.map((item) => {
      if (item.name === selectedList.name) {
        item.list = selectedList.list;
      }
    });
    //save the list
    setTodoLists(tempList);
    //set new list
    setSelectedList(todoList);
  }

  function addListItem(item) {
    //new list of items
    const tempSelectedList = [...selectedList.list, item];
    // update the list state
    setSelectedList((selectedList) => ({
      ...selectedList,
      list: tempSelectedList,
    }));
  }

  function deleteList() {
    const listName = selectedList.name;
    const newList = todoLists;

    //search list for selected and deleted it
    for (let i = 0; i < newList.length; ++i) {
      if (newList[i].name === listName) {
        newList.splice(i, 1);
        break;
      }
    }
    setTodoLists(newList);
    setSelectedList({ name: "", list: [] });
  }

  return (
    <div className='AppContainer'>
      <aside className='AllListsSideMenu'>
        <ListManager
          todoLists={todoLists}
          selectNewList={selectNewList}
          addNewList={addNewList}
        />
      </aside>
      <div className='DisplayListContainer'>
        <DisplayList
          selectedList={selectedList}
          addListItem={addListItem}
          deleteList={deleteList}
        />
      </div>
    </div>
  );
};

export default App;
