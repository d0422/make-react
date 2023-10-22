import { rerender } from './render';

let state;
export const useState = (initialValue) => {
  if (state === undefined) {
    //현재 상태가 비어있으면
    state = initialValue; //입력한 초기값으로 초기화해라
  }

  const setState = (updateValue) => {
    state = updateValue;
    rerender();
  };

  return [state, setState];
};
