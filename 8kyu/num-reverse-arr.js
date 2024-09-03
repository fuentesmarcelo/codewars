// PREP
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    //code here
}

// P: the parameter is a non-negative number
// R: we want to return the digits of the numbers with in an array but in reverse order
// E: 35231 => [1,3,2,5,3]
// P: trying to solve using split, reverse, join


// my solution

function digitize(n){
    let numToArr = toArray
    return numToArr.reverse();
}

// right solution

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}