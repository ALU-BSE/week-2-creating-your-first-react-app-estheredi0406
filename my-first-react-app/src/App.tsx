import React, { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <MyComponent title="Hello from MyComponent!" />
      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
