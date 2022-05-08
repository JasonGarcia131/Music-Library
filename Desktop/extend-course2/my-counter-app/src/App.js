import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(1)
  window.setCounter = setCounter

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  );
}

export default App;
