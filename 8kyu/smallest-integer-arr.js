// PREP

// Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
    //your code here
    return 0;
}

// P: the parameter is an array of integers
// R: we want to return the smallest integer
// E: Given [34, 15, 88, 2] your solution will return 2
// P: we will first need to declare a sortedNums variable using .sort
// once we have the numbers sorted we can call using the 0 index


// my solution

function findSmallestInt(arr) {
    let sortedNums = arr.sort((a, b) => a - b)
    return sortedNums[0];
} 