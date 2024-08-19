// PREP
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

function solve(s){
    //..
}

// P: we are given a string
// R: we want to return the string with either all lower case or upper case
// E: 'TeST' => 'TEST' or 'test'
// P: we are going to try to make it all upper case using toUpperCase();


// my solution

function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}