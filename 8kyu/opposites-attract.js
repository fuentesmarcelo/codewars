// PREP 2024-08-08
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    // moment of truth
}

// P: (flower1, flower2) checking for boolean
// R: return true if they are in love and false if they are not depending if petals are even or odd
// E: if flower1 has 4 and flower2 has 3 => they are in love
    // if flower1 and 4 and flower2 has 4 => they are not in love

// P: make an if statement
// if one parameter is even and the other is odd return in love
// else return not in love

// my solution

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}