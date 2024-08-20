// PREP
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
    // ...
}
// hint: math.ceil or while loop also can be solved as arrow

// P: the parameter is a number
// R: return the number rounded up and multiplied by 5
// E: input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// P: first we will 

function roundToNext5(n){
    return Math.ceil(n/5)*5;
}

function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
}

const roundToNext5 = n => Math.ceil(n / 5) * 5;
