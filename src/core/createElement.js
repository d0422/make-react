export const createElement = (tagName, props, ...children) => {
  return {
    tagName,
    props,
    children,
  };
};
