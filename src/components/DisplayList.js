import React from "react";
import AddItem from "./AddItem";
import "../styles/todoliststyle.css";

//Props: selectedList, addItem

const DisplayList = ({selectedList, setSelectedList}) =>  {

  function addListItem(listItem) {
    const newList = [...selectedList.list, listItem]
    setSelectedList(thest =>({name: selectedList.name, list: newList}));
  }
  // <button onClick={deleteList}>Delete List</button>

    return (
      <div>
        <div >
          <h2>{selectedList.name}</h2>
        </div>
        <div>
          <ul >
            {
            selectedList.list.map((listItem)=>{
              return<li>{listItem}</li>
            })}
            <li></li>
            <AddItem addItem={addListItem} />
          </ul>
        </div>
      </div>
    );

}

export default DisplayList;
