import React from '../core/React';
import { useState } from '../core/useState';
import { Header } from './Header';

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  return (
    <div>
      <Header />
      <div>Counter1</div>
      <span>{count}</span>
      <button
        onclick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>

      <div>Counter2</div>
      <span>{count2}</span>
      <button
        onclick={() => {
          setCount2(count2 + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
};

export default App;
