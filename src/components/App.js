import React, { useState } from "react";
import ListManager from "./ListManager";
import DisplayList from "./DisplayList";
import "../styles/SelectAndDisplay.css"

const App = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [selectedList, setSelectedList] = useState({name: '', list:[]});

 



  // //saves previous todo list and retrevies the todo list with name value
  // function listSelected(value) {
  //   //const currentName = selectedList.name;
  //   //const currentList = selectedList.list;
  //   //const newList = todoLists;

  //   // Find the previous todo list and save it's list
  //   newList.map((item) => {
  //     if (item.name === currentName) {
  //       item.list = currentList;
  //     }
  //   });
  //   setTodoLists(newList);

  //   //set the new list
  //   const nextList = todoLists.map((item) => {
  //     if (item.name === value) {
  //       setSelectedList(item);
  //     }
  //   });
  // }
  
  // //Move
  // function deleteList() {
  //   const listName = selectedList.name;
  //   const newList = todoLists;

  //   //search list for selected and deleted it
  //   for (let i = 0; i < newList.length; ++i) {
  //     if (newList[i].name === listName) {
  //       newList.splice(i, 1);
  //       break;
  //     }
  //   }
  //   setTodoLists(newList);
  //   setSelectedList({ name: "", list: [] });
  // }

  // <DisplayList selectedList={selectedList} deleteList={deleteList}/>

/**
 * This function creates a new list with name param
 * @param {*} name -The name of a List
 */
 function addList(listName) {
  setTodoLists(newList =>([...todoLists, {name: listName, list: []}]));
}
 /**
   * This function selects a list with name param
   * @param {*} name 
   */
  function selectList(list) {
    saveList();
    //Select the new List
    setSelectedList(list);
  }

  function saveList(){
    const saveName = selectedList.name;
    const saveTodoList = selectedList.list;
    setTodoLists(updateList =>([...todoLists,{name:saveName,list: saveTodoList}]))
    console.log(todoLists);
  }

  return (
    <div>
      <div className='SelectAndDisplay'>
        <aside className='ListMenu'>
          <ListManager todoLists={todoLists} addList={addList} selectList={selectList}/>
        </aside>
        <div className='DisplayList'>
         <DisplayList selectedList = {selectedList} setSelectedList={setSelectedList}/>
        </div>
      </div>
    </div>
  );
};

export default App;
