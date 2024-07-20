// PREP 2024-07-19
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// P: number
// R: multiply a num by 8 else by 9

// my solutions
const simpleMultiplication = number => number % 2 === 0 ? (number * 8) : (number * 9);

function simpleMultiplication(n){
    return n * (n % 2 ? 9 : 8);
}