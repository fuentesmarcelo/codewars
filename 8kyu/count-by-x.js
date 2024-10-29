// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
    let z = [];
  
    return z;
}

// we are given two parameters (x and n)
// both are numbers, always positive
// we want to return results as an array 
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10] || x = 2, n = 5  --> [2,4,6,8,10]
// use .filter() to create a new array that pass a test
// we want to make sure n and x are greater than 0
// then it should return 


//  my solution

function countBy (x, n){
    let z = z.filter((x, n) => n * x);
    if(z > 0){
        return z;
    }
}

const countBy = (x, n) => n*x;


// right solutions

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}