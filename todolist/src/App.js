import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';

import './App.css';

class App extends Component {

  // add state, just a javascript object
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Study code',
        completed: false
      },
      {
        id: 3,
        title: 'Exercise',
        completed: false
      },
      {
        id: 4,
        title: 'Call Parents',
        completed: false
      },
      {
        id: 5,
        title: 'Call Sophia',
        completed: false
      },
      {
        title: 'Cook',
        id: 6,
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

  render() {
    
    return (
      <div className="App">
        < Header / >
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteToDo={this.deleteToDo}/>
        
      </div>
    );
  }
}

export default App