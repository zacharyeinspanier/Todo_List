
import React from "react";
import AddItem from './AddItem';
import "../styles/DisplayList.css";

const DisplayList = ({selectedList, addListItem}) =>{


    return (
      <div className='SelectedListContainer'>
        <h3>{selectedList.name}</h3>
        <ul>
          {selectedList.list.map((element) => {
            return <li>{element}</li>;
          })}
          <li><AddItem addListItem={addListItem} /></li>
        </ul>
      </div>
    );
  }


export default DisplayList;
