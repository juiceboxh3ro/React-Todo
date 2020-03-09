import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      item: ''
    }
  }

  handleChanges = e => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.item !== '') {
      this.props.addTask(this.state.item)
      this.setState({
        item: ''
      })
    }
  }

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input
          className="add-task"
          value={this.state.item}
          onChange={this.handleChanges}
          type="text" name="item"
        />
        <button className="add-btn">Add</button>
      </form>
    )
  }
}
