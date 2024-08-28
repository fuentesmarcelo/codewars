// PREP
//Complete the solution so that it reverses the string passed into it.

function solution(str){
    //code here
}
// hint: split, reverse, join
// P: the parameter is a string
// R: we want to return the string reversed
// E: 'world'  =>  'dlrow'
// P: we are going to solve this as a regular function
// we are first add a return 
// attach the str to split, reverse, join


// my solution

function solution(str){
    return str.split('').reverse().join('');
}


const solution = str => str.split('').reverse().join('');