import React from 'react';

import ToDoItem from './ToDoItem';


class ToDoList extends React.Component {
  render() {
    return (
      <>
        {this.props.items.map((item, i) => (
          <div className="item" key={i}>
            <ToDoItem
              item={item}
              deleteItem={this.onDeleteItem}
            />
            <div className="actions">
              <button onClick={() => this.props.toggleComplete(i)}>Complete</button>
              <button onClick={() => this.props.deleteItem(i)}>Delete</button>
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default ToDoList;
