import React from 'react';

import ToDoAdd from './ToDoAdd';
import ToDoList from './ToDoList';

class ToDo extends React.Component {
  constructor() {
    super();

    let tasks = localStorage.getItem('tasks');

    if (!tasks) {
      tasks = [
        {
          description: 'go for a walk',
          isComplete: false,
        },
        {
          description: 'learn React for 2 hours',
          isComplete: true,
        },
      ];
    } else {
      tasks = JSON.parse(tasks);
    }

    this.state = {
      items: tasks,
    }
  }

  updateItemList(items) {
    localStorage.setItem('tasks', JSON.stringify(items));

    this.setState({
      items,
    });
  }

  onAddItem = (description) => {
    const items = this.state.items;
    items.push({
      description,
      isComplete: false,
    });

    this.updateItemList(items);
  };

  onDeleteItem = (index) => {
    const items = this.state.items;
    items.splice(index, 1);

    this.updateItemList(items);
  }

  onToggleCompletion = (index) => {
    const items = this.state.items;
    items[index].isComplete = !items[index].isComplete;

    this.setState({
      items,
    });
  }

  render() {
    return (
      <>
        <ToDoAdd
          items={this.state.items}
          addItem={this.onAddItem}
        />
        <ToDoList
          items={this.state.items}
          deleteItem={this.onDeleteItem}
          toggleComplete={this.onToggleCompletion}
        />
      </>
    );
  }
};

export default ToDo;
