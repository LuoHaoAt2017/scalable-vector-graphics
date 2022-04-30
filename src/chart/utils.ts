export function createSvgElem(mark, w?, h?): SVGElement {
  const elem = document.createElementNS("http://www.w3.org/2000/svg", mark);
  return elem;
}