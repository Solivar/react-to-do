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
              toggleComplete={() => this.props.toggleComplete(i)}
            />
            <div className="actions">
              <button onClick={() => this.props.deleteItem(i)}>X</button>
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default ToDoList;
