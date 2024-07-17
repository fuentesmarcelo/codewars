// PREP 2024-07-15
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// P: a
// R: return a function that removes duplicates from an arr

// my solutions
function distinct(a){
    return a.filter((value, index) => a.indexOf(value) === index);
}

const distinct = a => a.filter((item, index) => a.indexOf(item) === index);