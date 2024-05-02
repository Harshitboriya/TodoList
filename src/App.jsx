import React from 'react'
// import Bt from './pro/Bt'
// import Random1 from './pro/Random1'
import Name from './Component/Name'
import AddTodo from './Component/AddTodo'
// import TodoItem from './Component/TodoItem'
import Head from './Component/Head'
import "./App.css";
import TodoItems from './Component/TodoItems'
import { useState } from 'react';
import WelcomeMessage from './Component/WelcomeMessage';
function App() {
  

  
  const [todoItems,settodoItems] =useState([]);
  

  const handleNewItem = (itemName,itemDueDate)=>
  {
    console.log(`new ItemAdded ; ${itemName} date ${itemDueDate}`);
    const newTodoItems =[...todoItems,{name:itemName , dueDate: itemDueDate}];
  settodoItems(newTodoItems);

  };

const handleDeleteItem = (todoItemName)=>{
  const newTodoItems = todoItems.filter(item=>item.name!=todoItemName);
  settodoItems(newTodoItems);

  console.log(`item Delete : ${todoItemName}`);
   
}
 
  return (
    <>
   
      <div className="container text-center ll  kg-h">
      <Name/>
     <Head/>
      <AddTodo onNewItem={handleNewItem}/>
    {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      

 

</div>
    
    </>
  )
}

export default App
