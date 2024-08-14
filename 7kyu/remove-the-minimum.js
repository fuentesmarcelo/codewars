// PREP

//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
}

// P: we are given an array of integers
// R: we want to return the array with the lowest interger removed
// E: [1, 2, 3, 4, 5] => [2, 3, 4, 5] or [2, 5, 434] => [5, 434]
// P: try using .sort and .shift

// my solutions

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
