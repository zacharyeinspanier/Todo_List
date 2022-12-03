import React from "react";
import "../styles/list-menu.css"

const SelectList = ({list, onListSelect}) => {

    function listClick(item){
        onListSelect(item);
    }


  return (
    <form>
      <label>Todo Lists</label>

      <ul className='ListMenu'>
        {list.map((item) => (
          <li onClick={() =>listClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SelectList;
