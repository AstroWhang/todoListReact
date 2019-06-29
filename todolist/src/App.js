import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';

import './App.css';

class App extends Component {

  // add state, just a javascript object
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Study code',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Exercise',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Call Parents',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Call Sophia',
        completed: false
      },
    ]
  }

  toggleComplete = (id) => {
    
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  deleteToDo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState( { todos: [...this.state.todos, newTodo] });
  }

  render() {
    
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteToDo={this.deleteToDo} />
        </div>
      </div>
    );
  }
}

export default App