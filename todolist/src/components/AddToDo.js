import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToDo extends Component {

  state = {
    title: ''
  }

  // component level state, previous others were app level states
  titleUpdate = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState( {title: ''});
  }

  render() {
    return (
      <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
        <input type="text" name="title" placeholder="Add Todo ..." style={{flex: '10', padding: '5px'}} value={this.state.title} onChange={this.titleUpdate} />
        <input type="submit" value="Submit" className="btn" style={{flex: '1'}} />
      </form>
    )
  }
}

// PropTypes
AddToDo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}