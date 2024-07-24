// PREP 2024-07-23
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.


// P: (a, b)
// R: return the third side of a triangle

function otherAngle(a, b) {
    return 0;
}


// my solutions

function otherAngle(a, b) {
    let c = 180 - (a + b);
    return c;
}