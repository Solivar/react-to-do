import React from 'react';

import ITEM_MAX_COUNT from '../../consts';
import ToDoItemCounter from './ToDoItemCounter';

class ToDoAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: '',
    };
  }

  isMaxCount = () =>{
    return this.props.items.length === ITEM_MAX_COUNT;
  }

  isFormValid = () => {

    if (!this.state.value) {
      this.setState({ error: 'Task description required' });

      return false;
    } else if (this.isMaxCount()) {
      this.setState({ error: `Don't bite more than you can chew` });

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
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="label-group">
          <label htmlFor="add-item">Add a task</label>
          <ToDoItemCounter items={this.props.items} error={this.state.error}/>
        </div>
        <div className="input-group">
          <input
            id="add-item"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
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
