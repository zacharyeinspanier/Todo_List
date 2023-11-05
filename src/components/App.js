import React, { useState, useReducer, useEffect } from "react";
import ListManager from "./ListManager";
import DisplayList from "./DisplayList";
import "../styles/TodoListApp.css";

/**
 * Reducer Function used to disbatch state actions
 * 
 * @param {*} state a list of todo lists
 * @param {*} action the action to perform on the data. Contains payload object
 * @returns updated state
 */
function reducer(state, action) {
  switch (action.type) {
    // Add a new todo list to state
    case "add":
      //empty name
      if (action.payload.name === "") {
        return state;
      }
      // check for dups
      for(let i = 0; i < state.length; ++i){
        if (state[i].name === action.payload.name){
          return state
        }
      }
      // Creates now todolist with name
      return [...state, newItem(action.payload.name)];

    // Deletes a todo list from state
    case "delete":
      return state.filter((item) => item.name !== action.payload.name);
    
    // Changes the type of the list(Note, List, Note+List)
    case "changeList":
      return state.map((item) => {
        if (item.name === action.payload.name) {
          // get old content to be added when content is chagned
          let oldContent = item.content 
          return { ...item, type: action.payload.itemType, content: newContent(action.payload.itemType, oldContent)};
        }
        return item;
      });

    // Saves the todo list to state
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
/**
 * Creates a new empty todo list
 * 
 * @param {string} name name of a new todolist
 * @returns new todo list
 */
function newItem(name) {
  return { name: name, type:"Note+List",content: { note: "", list: [] } };
}

/**
 * create the contents for a todo list when the type is changed
 * 
 * @param {String} type new todo list type
 * @param {Object} oldContent object contaning with contents 
 * @returns 
 */
function newContent(type, oldContent) {
  let newNote = ""
  let newList = []

  if ("note" in oldContent){
    newNote = oldContent["note"]
  }
  if ("list" in oldContent){
    newList = oldContent["list"]
  }

  switch (type) {
    case "Note":
      return { note: newNote };
    case "List":
      return { list: newList };
    case "Note+List":
      return { note: newNote, list: newList };
    default:
      return { note: "", list: [] };
  }
}

/**
 * App to render
 * 
 * @returns The JSX components
 */
const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [selectedList, setSelectedList] = useState({
    name: "",
    content: { note: "", list: [{ value: "", strike: false }] },
  });

   // set state for selected list, after use reducer
  useEffect(()=>{
    state.map((item) => {
      if (item.name === selectedList.name) {
        setSelectedList(item);
      }
      return item;
    });
  },[state, selectedList.name])

  /**
   * Call reducer dispatch for adding a list
   * 
   * @param {string} value name of new list
   */
  function addNewList(value) {
    dispatch({ type: "add", payload: { name: value } });
  }

  /**
   * Call reducer dispatch for deleting a list
   * 
   * @param {string} value name of new list
   */
  function deleteList(value) {
    dispatch({ type: "delete", payload: { name: value } });
  }

  /**
   * Call reducer dispatch to change type
   * 
   * @param {string} value name of list to modify
   * @param {string} action list type to change to
   */
  function changedListType(value, action) {
    dispatch({
      type: "changeList",
      payload: { name: value, itemType: action },
    });
    
  }

  /**
   * Call reducer dispatch for saving a list
   * Save list before updating state
   * 
   * @param {string} value name of new selected list
   */
  function selectNewList(value) {

    let stateCopy = selectedList
    dispatch({ type: "saveList", payload: { list: stateCopy} });

    state.map((item) => {
      if (item.name === value) {
        setSelectedList(item);
      }
      return item;
    });
  }

  // JSX for app
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
