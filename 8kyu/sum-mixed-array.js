// PREP

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumMix(x){
    //code here
}

// P: the parameter is an array of integers as strings and numbers
// R: we want to return the sum of the array values if all were numbers
// E: n/a
// P: try to solve using an arrow function
// they to use .reduce to solve the problem and test


// my solution

const sumMix=x=>x.reduce((a,b)=>+b+a,0)