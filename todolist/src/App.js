import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddToDo from './components/AddToDo';
// import uuid from 'uuid'; //generated a random id key
import axios from 'axios';

import './App.css';


class App extends Component {

  // add state, just a javascript object
  state = {
    todos: []
  }

  componentDidMount() {
    const listNumber = 15
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${listNumber}`)
      .then(res => this.setState({todos: res.data }))
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
    // delete request
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  addTodo = (title) => {
    // post request
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));

  }

  render() {
    
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddToDo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteToDo={this.deleteToDo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div> 
      </Router>
    );
  }
}

export default App