import {
  createArray,
  getDeleteKeysArray,
  getDiffKeysObject,
  getLongerArrayLength,
  getNewKeysObject,
} from '../utils';
import { makeDOM } from './makeDOM';

const updateAttributes = (target, newProps, oldProps) => {
  const diffProps = getDiffKeysObject(oldProps, newProps);
  const addedProps = getNewKeysObject(oldProps, newProps);
  const deletedProps = getDeleteKeysArray(oldProps, newProps);
  if (
    Object.keys(diffProps).length === 0 &&
    Object.keys(addedProps).length === 0 &&
    deletedProps.length === 0
  )
    return;
  deletedProps.forEach((key) => {
    if (key.match(/^on/)) {
      target[key] = null;
    }
    if (key === 'className') {
      target.removeAttribute('class');
    }
    delete target[key];
    target.removeAttribute(key);
  });

  Object.keys({ ...diffProps, ...addedProps }).forEach((key) => {
    target[key] = newProps[key];
  });
};

export const updateDOM = (parent, prev, cur, index = 0) => {
  if (prev && cur === null) {
    if (typeof prev === 'string' || typeof prev === 'number') {
      return (parent.innerHTML = '');
    }
    return prev.ref?.remove();
  }

  if (prev === null && cur) {
    return parent.appendChild(makeDOM(cur));
  }

  if (typeof cur === 'string' || typeof cur === 'number') {
    if (cur === prev) return;
    return parent.replaceChild(makeDOM(cur), parent.childNodes[index]);
  }

  if (cur.tagName !== prev.tagName) {
    return parent.replaceChild(makeDOM(cur), parent.childNodes[index]);
  }

  if (parent.children[index]) {
    updateAttributes(parent.children[index], cur.props || {}, prev.props || {});
    const length = getLongerArrayLength(prev.children, cur.children);

    createArray(length).forEach((i) =>
      updateDOM(parent.children[index], prev.children[i], cur.children[i], i)
    );
  }
  cur.ref = prev.ref;
};
