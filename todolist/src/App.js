import React, { Component } from 'react';
import Todos from './components/Todos';

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

  render() {
    
    return (
      <div className="App">

        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
        
      </div>
    );
  }
}

export default App