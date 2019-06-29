import React, { Component } from 'react';
import TodoItem from './TodoItem';
// react convention is to include proptypes
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    
    return this.props.todos.map((todo) => (
      // key is needed as a unique identifier when mapping out the array
      <TodoItem key={todo.title} todo={todo} toggleComplete={this.props.toggleComplete}/>
    ))
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos
