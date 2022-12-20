import React, { useState } from "react";
import ListManager from "./ListManager";
import DisplayList from "./DisplayList";
import "../styles/TodoListApp.css"


const App = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [selectedList, setSelectedList] = useState({ name: "", content: {note: "", list:[]} });
//  const [selectedList, setSelectedList] = useState({ name: "", content: {note: "", list:[{ value: '', strike: False}]});
  //adds a new todo list with name: value
  function addNewList(value) {
    if(value ===""){
      return;
    }
    const newTodoList = [...todoLists, { name: value, content: {note: "", list:[]} }];
    setTodoLists(newTodoList);
  }

  function deleteList(todoList) {
    //re-render happens when NEW object appears on state
    // It is necessary to create a NEW list
    const tempList = [...todoLists]

    if(todoList.name ===selectedList.name){
      setSelectedList({ name: "", content: {note: "", list:[]} });
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
  

  //saves previous todo list and retrevies the todo list with name value
  function selectNewList(todoList) {
    const newList = todoLists;

    // Find the previous todo list
    newList.map((item) => {
      if (item.name === selectedList.name) {
        item.content.note = selectedList.content.note;
        item.content.list = selectedList.content.list;
        return;
      }
    });
    //save the list
    setTodoLists(newList);
    //set new list
    console.log(todoList);
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
          setSelectedList={setSelectedList}
        />
      </div>
    </div>
  );
};

export default App;
