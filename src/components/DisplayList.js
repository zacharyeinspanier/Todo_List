import React, {useRef} from "react";
import Add from "./Add";
import Delete from "./Delete";
import "../styles/DisplayList.css";

const DisplayList = ({ selectedList, addListItem, deletListItem }) => {


  function strikeItem(event){

    if(event.target.className === ''){
      event.target.className = 'strikeThrough'
    }
    else{
      event.target.className = '';
    }
    return;
  }

  return (
    <div className="SelectedListContainer">
      <h3>{selectedList.name}</h3>
      <ul>
        {selectedList.list.map((element, index) => {
          return (
            <div className="ListItemContainer">
              <li
                id={element + index}
                key={element + index}
                onClick={event => strikeItem(event)}
              >
                {element}
              </li>
              <Delete listOrItem={element} dltListOrItem={deletListItem} />
            </div>
          );
        })}
        <li>
          <Add addListOrItem={addListItem} placeHolderTxt="Enter Item Name" />
        </li>
      </ul>
    </div>
  );
};

export default DisplayList;
