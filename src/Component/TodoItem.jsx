import React from 'react'

function TodoItem({todoName,todoDate,onDeleteClick}) {
    

  return (
    <div className='container'>
     <div className="row kg-row" >
    <div className="col-5"> {todoName}</div>
    <div className="col-5">{todoDate}</div>
    <div className="col-2"><button type="button kg-b" className="btn btn-danger" 
    onClick={()=>onDeleteClick(todoName)}>Delete</button></div>
  </div>

  </div>
  )
}

export default TodoItem