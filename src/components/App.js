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
  function deleteList(todoList) {
    //re-render happens when NEW object appears on state
    // It is necessary to create a NEW list
    const tempList = [...todoLists]

    if(todoList.name ===selectedList.name){
      setSelectedList({ name: "", list: [] });
    }

    // Find the previous todo list
    tempList.map((item, index) => {
      if (item.name === todoList.name) {
        tempList.splice(index,1);
        return;
      }
    });
    setTodoLists(tempList);
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
  
  function deletListItem(item){
    //get list items
    const tempList = [...selectedList.list]

    //Map through, find list item, remove
    tempList.map((listItem, index) => {
      if (listItem === item) {
        tempList.splice(index,1);
        return;
      }
    });

    setSelectedList((selectedList) => ({
      ...selectedList,
      list: tempList
    }));




  }

  //saves previous todo list and retrevies the todo list with name value
  function selectNewList(todoList) {
    const tempList = todoLists;

    // Find the previous todo list
    tempList.map((item) => {
      if (item.name === selectedList.name) {
        item.list = selectedList.list;
        return;
      }
    });
    //save the list
    setTodoLists(tempList);
    //set new list
    setSelectedList(todoList);
  }

 

  

  return (
    <div className='AppContainer'>
      <aside className='AllListsSideMenu'>
        <ListManager
          todoLists={todoLists}
          selectNewList={selectNewList}
          addNewList={addNewList}
          deleteList={deleteList}
        />
      </aside>
      <div className='DisplayListContainer'>
        <DisplayList
          selectedList={selectedList}
          addListItem={addListItem}
          deletListItem={deletListItem}
        />
      </div>
    </div>
  );
};

export default App;
