// PREP

// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
    // your code here
    return 0;
}
// hint: for loop


// P: the parameter is an array
// R: we want to return the average of the numbers
// E: [1, 1, 1] => 1
// P: declare a variable
// make a for loop
// divide results





// my solution

function findAverage(array) {
    let sum = 0
    for(let i = 0; i <array.length; i++){
      sum += array[i]
    }
    return sum/array.length;
}