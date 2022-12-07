import React from 'react';


const Delete = ({listOrItem, dltListOrItem}) =>{

    function clickDel(){
        console.log('click')
        dltListOrItem(listOrItem)
    }

    return(<button className='DeleteBtn'onClick={clickDel}>X</button>);
}

export default Delete;