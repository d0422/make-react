import App from '../components/App';
import { makeDOM } from './makeDOM';
import { updateDOM } from './updateDOM';
import { initializeIndex } from './useState';

let prev; //이전의 virtual DOM
let root; //최상단 root요소

/**
 * @param {Object} content
 * @param {HTMLElement} container
 */
export const render = (content, container) => {
  root = container; //최상단 요소를 최초렌더(mount)시 등록
  prev = content; // 현재 virtual DOM을 최초 mount컴포넌트로 등록
  const element = makeDOM(content);
  container.appendChild(element);
};

export const rerender = () => {
  initializeIndex(); //리렌더시 useState의 index를 초기화
  const updateElement = App();
  updateDOM(root, prev, updateElement);
  prev = updateElement; //업데이트가 끝나면, 요소 업데이트
};
