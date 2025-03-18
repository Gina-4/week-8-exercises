// Research the Array.reduce function. It works a lot like forEach and map, but it will pass two parameters to the function you pass to it. Starting from an array [1, 2, 3], sum up the squares of all elements. The result should be 14

const array1 = [1, 2, 3];
const sumOfSquares = array1.reduce ((acc, num) => acc + num ** 2, 0);
console.log(sumOfSquares);
