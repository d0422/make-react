import { rerender } from './render';

const states = []; //배열 형태의 states
let stateIndex = 0;

export const useState = (initialValue) => {
  const indexBind = stateIndex; //stateIndex가 ++형태로 변경되므로 bind시켜주는 변수
  stateIndex++;
  if (states[indexBind] === undefined) {
    states.push(initialValue);
  }

  const setState = (updateValue) => {
    states[indexBind] = updateValue;
    rerender();
  };
  return [states[indexBind], setState];
};

export const initializeIndex = () => {
  stateIndex = 0;
};
