import React from 'react';

class ToDoItem extends React.Component {
  render() {
    const { description, isComplete } = this.props.item;

    return (
      <div className="details" onClick={() => this.props.toggleComplete()}>
        <p className={isComplete ? 'completed' : ''}>{description}</p>
      </div>
    );
  }
};

export default ToDoItem;
