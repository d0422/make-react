import React from '../core/React';
import { useState } from '../core/useState';
import { Header } from './Header';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <span>{count}</span>
      <button
        onclick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
};

export default App;
