// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// my solutions
const squareSum = numbers => numbers.reduce((a, b) => a + b**2, 0);

function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }