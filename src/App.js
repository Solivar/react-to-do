import React from 'react';

import ToDo from './components/to-do/ToDo';
import "./styles.scss";

function App() {
  return (
    <div className='todo'>
      <h1>ToDo</h1>
      <ToDo/>
    </div>
  );
}

export default App;
