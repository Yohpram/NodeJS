const fs = require('fs');
const geometry = require('./rumus');

const squareSide = 5;
const rectangleLength = 6;
const rectangleWidth = 4;

const squareArea = geometry.calculateSquareArea(squareSide);
const squarePerimeter = geometry.calculateSquarePerimeter(squareSide);
const rectangleArea = geometry.calculateRectangleArea(rectangleLength, rectangleWidth);
const rectanglePerimeter = geometry.calculateRectanglePerimeter(rectangleLength, rectangleWidth);

const data = `Luas persegi: ${squareArea}\nKeliling persegi: ${squarePerimeter}\nLuas persegi panjang: ${rectangleArea}\nKeliling persegi panjang: ${rectanglePerimeter}`;

fs.writeFile('output.txt', data, (err) => {
  if (err) {
    console.error('Error writing to output.txt:', err);
  } else {
    console.log('Data has been written to output.txt');
  }
});
fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('Data read from output.txt:\n', data);
    }
  });