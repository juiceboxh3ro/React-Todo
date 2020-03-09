import React, { useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const toDo = []

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      toDo,
      item: ''
    }
  }

  toggleCompleted = (clickedID) => {
    this.setState({
      toDo: this.state.toDo.map(item => {
        if(item.id === clickedID) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    }

    this.setState({
      toDo: [...this.state.toDo, newTask]
    })
  }

  clearComplete = () => {
    this.setState({
      toDo: this.state.toDo.filter(item => {
        return item.completed === false;
      })
    })
  }

  render() {
    return (
      <div className="todo-list-holder">
        <div id="the-todo">
          <div className="header">
            <h2>Another To-Do List</h2>
            {this.state.toDo.length > 0 ? <p></p> : <p>Add an item to your to-do list</p>}
          </div>


          <TodoForm className="todo-form" addTask={this.addTask} />

          <TodoList
            toDo={this.state.toDo}
            toggleCompleted={this.toggleCompleted}
            clearComplete={this.clearComplete}
          /> 

        </div>
      </div>
    );
  }
}

export default App;
