// const arr = [5, 8, 12, 20, 1, 0, 4];

// Use find to get the first number in the array greater than 10.

const number = [5, 8, 12, 20, 1, 0, 4];
const result = number.find(num => num > 10);
console.log(result);

// Reverse the array

const arr = [5, 8, 12, 20, 1, 0, 4];
const reversedArr = arr.reverse();
console.log(reversedArr);

// Sort the array in ascending order.

const numbers = [5, 8, 12, 20, 1, 0, 4];
const sortedNumbers = numbers.sort ((a, b) => a - b);
console.log(sortedNumbers);

// Sort the array in descending order.

const descend = [5, 8, 12, 20, 1, 0, 4];
const sortedDescend = descend.sort ((a, b) => b - a);
console.log(sortedDescend);

// Use every to check if all elements in the array are positive numbers.

const array = [5, 8, 12, 20, 1, 0, 4];
const positive = array.every(num => num > 0);
console.log(positive);

// Merge two arrays [1, 2] and [3, 4] using concat.

const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = arr1.concat(arr2);
console.log(mergedArr);