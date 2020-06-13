import React from 'react';

import { TASK_DESC_LENGTH, ITEM_MAX_COUNT } from '../../consts';
import ToDoItemCounter from './ToDoItemCounter';

class ToDoAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: '',
      isFocused: false,
    };
  }

  isMaxCount = () =>{
    return this.props.items.length === ITEM_MAX_COUNT;
  }

  isFormValid = () => {
    this.setState({ error: false });

    if (!this.state.value) {
      this.setState({ error: 'Task description required' });

      return false;
    } else if (this.isMaxCount()) {
      this.setState({ error: `Don't bite more off than you can chew` });

      return false;
    }

    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.props.addItem(this.state.value);
      this.setState({ value: '' });
    }
  }

  handleChange = (event) => {
    if (event.target.value.length > TASK_DESC_LENGTH) {
      return;
    }

    this.setState({ value: event.target.value });
  }

  handleFocus = () => {
    this.setState({
      isFocused: true,
    });
  }

  handleBlur = () => {
    this.setState({
      isFocused: false,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="label-group">
          <label htmlFor="add-item">Add a task</label>
          <ToDoItemCounter
            items={this.props.items}
            error={this.props.items.length === ITEM_MAX_COUNT && this.state.error ? this.state.error : false }
          />
        </div>
        <div className="input-group">
          <input
            id="add-item"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <span className={`character-count ${this.state.isFocused ? 'visible' :'' }`}>
            { `${this.state.value.length}/${TASK_DESC_LENGTH}` }
          </span>
          <input type="submit" value="Add"/>
        </div>
        {this.state.error &&
          <p className="error">{this.state.error}</p>
        }
      </form>
    );
  }
};

export default ToDoAdd;
