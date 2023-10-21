import { makeDOM } from './makeDOM';
/**
 * @param {Object} content
 * @param {HTMLElement} container
 */
export const render = (content, container) => {
  const element = makeDOM(content);
  container.appendChild(element);
};
