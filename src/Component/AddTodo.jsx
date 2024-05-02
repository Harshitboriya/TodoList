import React from 'react'
import { useState } from 'react'

function AddTodo({onNewItem}) {

  const [todoname,settodoname]=useState();
  const [dueDate,setdueDate] =useState();

  const handleNameChange=(e)=>{
    settodoname (e.target.value);

  };
  const handleDateChange=(e)=>{
    setdueDate(e.target.value);

  };

  const handleAndButtonClick=()=>{
    onNewItem(todoname,dueDate);
    setdueDate("");
    settodoname("");


  };

  return (
<>      

<div className="row kg">
    <div className="col-5"> <input type="text"  placeholder='Product name' value={todoname} onChange={handleNameChange}/></div>
    <div className="col-5"><input type="date" value={dueDate} onChange={handleDateChange} /></div>
    <div className="col-2"><button type="button" className="btn btn-success kg-b"  onClick={handleAndButtonClick}>Add</button>
</div>
  </div>

</>
  )
}

export default AddTodo
