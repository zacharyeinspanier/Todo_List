import React from "react";
import CreateList from "./CreateList";
import "../styles/list-menu.css";

const ListManager = ({ todoLists, addList, selectList }) => {
  return (
    <div>
      <h3>All Lists</h3>
      <div>
        <ul>
          {
          todoLists.length === 0 ? null :
          todoLists.map((list) =>{
            return(<li onClick={() => selectList(list)}>{list.name}</li>);
          })}
          <CreateList onEnterAdd={addList} />
        </ul>
      </div>
    </div>
  );
};

export default ListManager;
