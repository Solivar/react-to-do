import React from 'react';

import ToDoAdd from './ToDoAdd';
import ToDoItemCounter from './ToDoItemCounter';
import ToDoList from './ToDoList';

class ToDo extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          description: 'desctiopregiojpdoipgdf',
          isComplete: false,
        },
        {
          description: 'kuntarrow',
          isComplete: true,
        },
      ],
    }
  }

  onAddItem = (description) => {
    const items = this.state.items;
    items.push({
      description,
      isComplete: false,
    });

    this.setState({
      items,
    });
  };

  onDeleteItem = (index) => {
    const items = this.state.items;
    items.splice(index, 1);

    this.setState({
      items,
    });
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
        <ToDoItemCounter items={this.state.items}/>
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
