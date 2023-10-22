import { rerender } from './render';

const states = [];
let stateIndex = 0;

export const useState = (initialValue) => {
  if (states[stateIndex] === undefined) {
    states.push(initialValue);
    stateIndex++;
  }

  const setState = (updateValue) => {
    states[stateIndex - 1] = updateValue;
    rerender();
  };

  return [states[stateIndex - 1], setState];
};
