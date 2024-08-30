// PREP
// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str){
    return str; // reverse those words
}

// P: the parameter is going to be a string with words passed through, each words are separated by one space
// R: we want to return the string of words in reverse
// E: 'the word' => 'word the'
// P: we will first solve this with a regular function
// we will be able to reverse the string using .split.reverse.join
// we need to make sure to add a space in the ''
// bonus solve it with an arrow function


// my solution

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}

const reverseWords = str => str.split(' ').reverse().join(' ');