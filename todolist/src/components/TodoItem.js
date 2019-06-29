import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed === true ? 'line-through' : 'none'
    } 
  }

  render() {
    // can style by doing inline or by variable name { backgroundColor: '#f3f3f3', fontSize: '30px' }, using inline requires {{}}, used a method

    //destructuring to avoid always writing this.props.todo
    const {id, title} = this.props.todo;      

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> 
          {' '}
          { title }
          <button style={btnStyle} onClick={this.props.deleteToDo.bind(this, id)}>x</button>
          

        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}