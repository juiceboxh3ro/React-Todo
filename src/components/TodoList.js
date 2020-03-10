import React from 'react'
import Todo from './Todo';

const TodoList = props => {
  console.log(props)
  return (
    <div>
      {props.toDo.map(item => (
        <Todo
          key={item.id}
          task={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button className="clear-btn" onClick={props.clearComplete}>Clear Complete</button>
    </div>
  )
}

export default TodoList;