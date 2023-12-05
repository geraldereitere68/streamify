/* filename: advanced_data_processing.js */
/*
This code demonstrates advanced data processing techniques using JavaScript.
It includes various algorithms and functions for sorting, filtering, and manipulating data.

Please note: This code is purely for demonstrative purposes and might not be optimized for performance.

To execute the code, copy and paste it into your JavaScript environment or use any online compiler.

*/

// Generating a random dataset
function generateRandomDataset(size) {
  const dataset = [];
  for (let i = 0; i < size; i++) {
    dataset.push(Math.floor(Math.random() * 1000));
  }
  return dataset;
}

// Sorting an array using Quick Sort algorithm
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

// Filtering even numbers
function filterEvenNumbers(array) {
  return array.filter((num) => num % 2 === 0);
}

// Calculating the sum of array elements
function calculateSum(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

// Transforming each array element using a provided function
function mapArray(array, transformFunction) {
  return array.map((num) => transformFunction(num));
}

// Example usage
const dataset = generateRandomDataset(100);

console.log(`Original Dataset: ${JSON.stringify(dataset)}`);

const sortedDataset = quickSort(dataset);
console.log(`Sorted Dataset: ${JSON.stringify(sortedDataset)}`);

const evenNumbers = filterEvenNumbers(sortedDataset);
console.log(`Filtered Even Numbers: ${JSON.stringify(evenNumbers)}`);

const sum = calculateSum(evenNumbers);
console.log(`Sum of Even Numbers: ${sum}`);

const transformedDataset = mapArray(sortedDataset, (num) => num * 2);
console.log(`Transformed Dataset: ${JSON.stringify(transformedDataset)}`);

// More functions and algorithms can be added below

// ...

// ...
