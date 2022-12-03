import { render } from "@testing-library/react";
import React from "react";
import AddItem from './AddItem';
import "../styles/Itemliststyle.css";

//Props: selectedList, addItem

class DisplayList extends React.Component{
  //Connect Delet List
  //connect add List item
  //connnect cross off
  //


  

  render(){
    return(
    <div>
      <label>{this.props.selectedList.value}</label>
      <ul>
        {console.log(this.props.selectedList.list)}
        {this.props.selectedList.list.map((element)=> {return<li>{element}</li>})
        }
        <AddItem addItem={this.props.addItem}/>
      </ul>
    </div>);
  }
}

export default DisplayList;
