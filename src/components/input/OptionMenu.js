import React, { useEffect } from "react";
import "../../styles/OptionMenu.css";

const OptionMenu = ({ item, changedListType }) => {
  // close drop down after next click
  window.onclick = function (event) {
    if (!event.target.classList.contains("dropdown-btn")) {
      var dropdowns = document.getElementsByClassName("dropdown-options");
      for(let i = 0; i < dropdowns.length; ++i){
          var menu = dropdowns[i];
          if(menu.classList.contains('show')){
              menu.classList.remove('show');
          }
      }
    }
  };

  function handelClick() {
    document.getElementById(`dropdownlist${item}`).classList.toggle("show");
  }

  useEffect(() => {}, [item]);

  return (
    <div className="dropdown">
      <button onClick={handelClick} className="dropdown-btn">
        ...
      </button>
      <div id={`dropdownlist${item}`} className="dropdown-options">
        <a onClick={() => changedListType(item, "Note")}>Note</a>
        <a onClick={() => changedListType(item, "List")}>List</a>
        <a onClick={() => changedListType(item, "Note+List")}>Note+List</a>
      </div>
    </div>
  );
};

export default OptionMenu;
