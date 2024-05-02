import React from 'react'
import TodoItem from './TodoItem';
import styles from "./TodoItems.module.css";


const TodoItems = ({todoItems,onDeleteClick}) => {
  return (
    <>
    <div className={styles.itemsContainer}>
      {
        todoItems.map((item)=> (<TodoItem todoDate={item.dueDate}
        todoName ={item.name} onDeleteClick={onDeleteClick}></TodoItem>)
      )}
      {/* <TodoItem  todoDate="23/4/45" todoName="dudud"/>
      <TodoItem  todoDate="23/4/43" todoName="Milkkk"/> */}

      </div>
    </>
  );
};


export default TodoItems