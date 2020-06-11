import React from 'react';

import ITEM_MAX_COUNT from '../../consts';

class ToDoAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: false,
    };
  }

  isMaxCount() {
    return this.props.items.length === ITEM_MAX_COUNT;
  }

  isFormValid = () => {
    this.setState({ error: false });

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
        <label>
          Add task: <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Add"/>
        {this.state.error &&
          <p>{this.state.error}</p>
        }
      </form>
    );
  }
};

export default ToDoAdd;
