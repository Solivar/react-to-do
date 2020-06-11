import React from 'react';

import ITEM_MAX_COUNT from '../../consts';

class ToDoItemCounter extends React.Component {
  render() {
    const count = this.props.items.length;

    return (
      <div className="counter">
        <p>{`${count}/${ITEM_MAX_COUNT}`}</p>
      </div>
    );
  }
};

export default ToDoItemCounter;
