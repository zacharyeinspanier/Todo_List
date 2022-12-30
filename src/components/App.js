import React, { useState, useReducer, useEffect } from "react";
import ListManager from "./ListManager";
import DisplayList from "./DisplayList";
import "../styles/TodoListApp.css";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      if (action.payload.name === "") {
        return state;
      }
      // check for dups => dups are not allowed
      for(let i = 0; i < state.length; ++i){
        if (state[i].name === action.payload.name){
          return state
        }
      }
      return [...state, newItem(action.payload.name)];
    case "delete":
      return state.filter((item) => item.name !== action.payload.name);
    case "changeList":
      return state.map((item) => {
        if (item.name === action.payload.name) {
          return { ...item, type: action.payload.itemType, content: newContent(action.payload.itemType) };
        }
        return item;
      });
    case "saveList":
      return state.map((item) => {
        if (item.name === action.payload.list.name) {
          return action.payload.list;
        }
        return item;
      });
    

    default:
      return state;
  }
}

function newItem(name) {
  return { name: name, type:"Note+List",content: { note: "", list: [] } };
}
function newContent(type) {
  switch (type) {
    case "Note":
      return { note: "" };
    case "List":
      return { list: [] };
    case "Note+List":
      return { note: "", list: [] };
    default:
      return { note: "", list: [] };
  }
}



const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [selectedList, setSelectedList] = useState({
    name: "",
    content: { note: "", list: [{ value: "", strike: false }] },
  });
  
  useEffect(()=>{
     // update selected List
     for(let i = 0; i < state.length; ++i){
      if (state[i].name === selectedList.name){
        setSelectedList(state[i]);
        return;
      }
    }
     
  }, [state, selectedList])

  //adds a new todo list with name: value
  function addNewList(value) {
    dispatch({ type: "add", payload: { name: value } });
  }

  function deleteList(value) {
    dispatch({ type: "delete", payload: { name: value } });
  }

  //saves previous todo list and retrevies the todo list with name value
  function selectNewList(value) {

    //save last selected list
    if (selectedList.name !== "" && selectedList !== "undefined") {
      const deepCopySelLst = JSON.parse(JSON.stringify(selectedList));
      dispatch({ type: "saveList", payload: { list: deepCopySelLst} });
    }

    //set state for selected list
    state.map((item) => {
      if (item.name === value) {
        // turn object into string, then parse it to an object
        const deepCopy = JSON.parse(JSON.stringify(item));
        setSelectedList(deepCopy);
      }
      return item;
    });
  }

  function changedListType(value, action) {
    dispatch({
      type: "changeList",
      payload: { name: value, itemType: action },
    });
  }

  return (
    <div className="AppContainer">
      <aside className="AllListsSideMenu">
        <ListManager
          state={state}
          selectNewList={selectNewList}
          addNewList={addNewList}
          deleteList={deleteList}
          changedListType={changedListType}
        />
      </aside>
      <div className="DisplayListContainer">
        <DisplayList
          selectedList={selectedList}
          setSelectedList={setSelectedList}
        />
      </div>
    </div>
  );
};

export default App;
