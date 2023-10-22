import { rerender } from './render';

const states = []; //배열 형태의 states
let stateIndex = 0;

export const useState = (initialValue) => {
  const indexBind = stateIndex; //stateIndex가 ++형태로 변경되므로 bind시켜주는 변수
  if (states[stateIndex] === undefined) {
    states.push(initialValue);
    stateIndex++;
  }

  const setState = (updateValue) => {
    states[indexBind] = updateValue;
    rerender();
  };
  return [states[indexBind], setState];
};
