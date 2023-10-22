let prev;
let root;
import App from '../components/App';
import { makeDOM } from './makeDOM';
import { updateDOM } from './updateDOM';
/**
 * @param {Object} content
 * @param {HTMLElement} container
 */
export const render = (content, container) => {
  root = container;
  prev = content;
  const element = makeDOM(content);
  container.appendChild(element);
};

export const rerender = () => {
  const updateElement = App();
  updateDOM(root, prev, App());
  prev = updateElement;
};
