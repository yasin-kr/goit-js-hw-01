"use strict";

function getElementWidth(content, padding, border) {
  const px1 = Number.parseFloat(content);
  const px2 = Number.parseFloat(padding) + Number.parseFloat(padding);
  const px3 = Number.parseFloat(border) + Number.parseFloat(border);

  return px1 + px2 + px3;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
