import React from "react";
import AddItem from "./AddItem";
import "../styles/todoliststyle.css";

//Props: selectedList, addItem

class DisplayList extends React.Component {
  //connnect cross off

  render() {
    let className = "showTodoList";

    if (
      this.props.selectedList.name === "" ||
      this.props.selectedList.name === null ||
      this.props.selectedList.name === undefined
    ) {
      className = "noShow";
    }

    return (
      <div className={className}>
        <label>{this.props.selectedList.name}</label>
        <ul className="todoListItems">
          {this.props.selectedList.list.map((element) => {
            return <li>{element}</li>;
          })}
          <AddItem addItem={this.props.addItem} />
        </ul>
        <button onClick={this.props.deleteList}>Delete List</button>
      </div>
    );
  }
}

export default DisplayList;
