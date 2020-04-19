export default function createDOMElement(type, properties = [], attributes = []) {
  const elem = document.createElement(type);

  properties.forEach((property) => {
    elem[property.name] = property.value;
  });
  attributes.forEach((attribute) => {
    elem.setAttribute(attribute.name, attribute.value);
  });

  return elem;
}
