import React from "react";
import "../styles/list-menu.css"

const SelectList = ({list, onListSelect}) => {

    function listClick(item){
        onListSelect(item);
    }

  return (
    <form>
      <ul className='ListMenu'>
        {
        list.map((item) => (
          <li onClick={() =>listClick(item.name)} >
            {item.name}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SelectList;
