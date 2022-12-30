import React, {useEffect} from 'react';
import Delete from "./input/Delete"
import Add from "./input/Add"
import TextNote from "./input/TextNote"


const NoteList = ({selectedList, updateNote, deletListItem, addListItem, handleClick})=>{


   return( 
   <div className="SelectedListContainer">
    <h3>{selectedList.name}</h3>
    <div className="ListContentContainer">
      <TextNote selectedList={selectedList} updateNote={updateNote} />
      <ul>
          {selectedList.content.list.map((element, index) => {
            return (
              <div className="ListItemContainer">
                <li
                  key={element.value + index}
                  onClick={() => handleClick(element)}
                  className = {`strike${element.strike.toString()}`}
                >
                  {element.value}
                </li>
                <Delete
                  item={element.value}
                  deletListItem={deletListItem}
                />
              </div>
            );
          })}
          <li><Add addListItem={addListItem} placeHolderTxt="Add a list item..."/></li>
        </ul>
    </div>
  </div>);
}

export default NoteList