// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// my solutions
function distinct(a){
    return a.filter((value, index) => a.indexOf(value) === index);
}

const distinct = a => a.filter((item, index) => a.indexOf(item) === index);