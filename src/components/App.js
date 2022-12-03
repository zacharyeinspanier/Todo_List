import React, {useState} from "react";
import CreateList from "./CreateList";
import SelectList from "./SelectList";
import DisplayList from'./DisplayList';

const App = () => {
const[todoLists, setTodoLists] = useState([]);
const[selectedList, setSelectedList] = useState({value:'',list:[]});
let allLists = new Object();


  function buttonClicked(value) {
    const newList = [...todoLists, value];
    setTodoLists(newList);
    allLists[value] = [];
  }

  function listSelected(value){

    //TODO: Save Previous List

    const listItems = allLists[value];
    if(listItems){
        setSelectedList({value: value, list:listItems});
    }
    else{
        setSelectedList({value: value, list:[]});
    }
  }

  function addListItem(value){
    //console.log(value);
    const newList = [...selectedList.list,value]
    const name = selectedList.value;
   //console.log(newList);
    setSelectedList(selectedList => ({...selectedList, list: newList}));
    //console.log(selectedList);
  }


  return (
    <div>
      <CreateList onButtonClick={buttonClicked} />
      <SelectList list={todoLists} onListSelect={listSelected}/>
      <DisplayList selectedList={selectedList} addItem={addListItem}/>
    </div>
  );
};

export default App;
