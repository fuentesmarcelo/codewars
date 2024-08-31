// PREP

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
//code here
}

// P: the parameter is a list
// R: we want the list in reverse order
// E: [1, 2, 3] => [3, 2, 1]
// P: I think we can do this with a regular or arrow function so do both
// using split, join, reverse


// my solution

function reverseList(list) {
    let sortedList = list.sort((a, b) => a -b);
    return sortedList.split('').reverse().join('');
}

// right solution

function reverseList(list) {
    return list.reverse();
}

const reverseList = list => list.reverse();
