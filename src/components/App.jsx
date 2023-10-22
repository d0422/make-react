import React from '../core/React';
import { rerender } from '../core/render';
import { Header } from './Header';

let count = 0;
const App = () => {
  return (
    <div>
      <Header />
      <span>{count}</span>
      <button
        onclick={() => {
          count++;
          rerender();
        }}
      >
        Click me!
      </button>
    </div>
  );
};

export default App;
