import React, {useEffect} from 'react';
import Delete from "./input/Delete"
import Add from "./input/Add"


/**
 * JSX for note and list display
 * 
 * @param {selectedList, updateNote, deletListItem, addListItem, handleClick} param: state and functions from display list
 * @returns 
 */
const NoteList = ({selectedList, updateNote, deletListItem, addListItem, handleClick})=>{


   return( 
   <div className="SelectedListContainer">
    <h3>{selectedList.name}</h3>
    <div className="ListContentContainer">
      <textarea
          className="note"
          type="text"
          placeholder="Type a note..."
          value={selectedList.content.note}
          onChange={(event) => updateNote(event.target.value)}
        />
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