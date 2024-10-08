// PREP 2024-07-09
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// P: n
// R: return num if even or not if false

//my solutions
function testEven(n){
    if(n % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function testEven(n){
    return n%2===0;
}

function testEven(n){
    return n % 2 === 0 ? true : false;
}