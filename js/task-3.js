function getElementWidth(content, padding, border) {
  const contentNumeric = parseFloat(content);
  const paddingNumeric = parseFloat(padding);
  const borderNumeric = parseFloat(border);
  return contentNumeric + paddingNumeric * 2 + borderNumeric * 2;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
console.log(getElementWidth('150px', '24px', '16px'));
