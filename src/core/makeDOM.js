/**
 * @param {object} element createElement로 만들어진 요소
 * @param {string} element.tagName 요소의 태그 이름
 * @param {object} element.props 요소의 속성 객체
 * @param {Array|undefined} element.children 요소의 자식 요소 배열
 */
export const makeDOM = (element) => {
  if (typeof element === 'string' || typeof element === 'number') {
    //element가 text거나 number인 경우 textNode로 만든다.
    return document.createTextNode(element);
  }

  const DOMElement = document.createElement(element.tagName);
  if (element.props)
    //props를 실제 DOM요소에 적용시킨다.
    Object.keys(element.props).forEach((key) => {
      DOMElement[key] = element.props[key];
    });

  if (element.children) {
    //children에 대해 재귀적으로 DOM요소를 만들어 현재 요소에 붙인다.
    element.children.forEach((child) => {
      DOMElement.appendChild(makeDOM(child));
    });
  }
  element.ref=DOMElement //여기 추가!!
  return DOMElement; //최종 생성된 DOM요소를 반환한다.;
};
