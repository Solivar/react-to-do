import React from 'react';

import { ITEM_MAX_COUNT } from '../../consts';

class ToDoItemCounter extends React.Component {
  render() {
    const count = this.props.items.length;

    return (
      <div className="counter">
        <p className={this.props.error ? 'error' : ''}>{`${count}/${ITEM_MAX_COUNT}`}</p>
      </div>
    );
  }
};

export default ToDoItemCounter;
