import React from 'react';

function Todolist(props) {
  const handleEnterPress = (e)=>{
    if(e.keyCode===13){
      props.editItem(props.id, props.item, false)
    }
  }
  return (
    <li className="list-item">
        {props.edit ? <input
        type="text"
        className="input-box-edit-todo"
        placeholder="Update your todo"
        autoFocus
        value={props.item}
        onChange={e => {
          props.editItem(props.id,e.target.value,true);
        } }
        onKeyDown={handleEnterPress} /> : props.item }
        <span className='icons'>
        {!props.edit ? <i className= "fa-solid fa-pen icon-edit"
        onClick={e=>{
            props.editItem(props.id, props.item, true)
        }}></i> :  <i className="fa-solid fa-check icon-edit"
        onClick={e=>{
            props.editItem(props.id, props.item, false)
        }}></i>}
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default Todolist