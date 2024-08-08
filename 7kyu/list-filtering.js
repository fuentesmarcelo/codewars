// PREP 2024-08-04
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    // Return a new array with the strings filtered out
}

// P: l
// R: return a new arr with the strings


// my solutions

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}

const filter_list = l => l.filter(c => typeof c === 'number');


function filter_list(l) {
    return l.filter(i=> typeof i !== 'string');
}