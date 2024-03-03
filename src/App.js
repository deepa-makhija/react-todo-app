import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    let todoItem = { id: uuidv4(), text: inputText, edit: false};
    if(inputText!=='')
      setListTodo([...listTodo,todoItem]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  const editListItem = (id, text, edit)=>{
    console.log(id, text, edit);
    const updatedList = listTodo.map((e) => {
      if (e.id === id) {
        e.text = text;
        e.edit = edit;
      }

      return e;
    });
    setListTodo(updatedList);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist 
              key={i} 
              index={i} 
              id={listItem.id} 
              item={listItem.text} 
              edit={listItem.edit}
              deleteItem={deleteListItem}            
              editItem={editListItem}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App