// PREP 2024-07-14
// Given a non-empty array of integers, return the result of multiplying the values together in order.

// P: x
// R: return the results multiplied by the values together in order

// my solutions
function grow(x){
    return x.return((acc, c) => acc * c, 0)
}

const grow = x => x.reduce((acc, c) => acc * c, 0);