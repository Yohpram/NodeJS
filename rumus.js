function calculateSquareArea(side) {
  return side * side;
}

function calculateSquarePerimeter(side) {
  return 4 * side;
}

function calculateRectangleArea(length, width) {
  return length * width;
}

function calculateRectanglePerimeter(length, width) {
  return 2 * (length + width);
}

module.exports = {
  calculateSquareArea,
  calculateSquarePerimeter,
  calculateRectangleArea,
  calculateRectanglePerimeter,
};