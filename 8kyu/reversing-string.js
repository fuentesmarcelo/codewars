// PREP
// You need to write a function that reverses the words in a given string. Words are always separated by a single space.
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

function reverse(string){
    //your code here
}

// P: the parameter is a string of words
// R: we want to return the string of words with the reverse order of words, always separated by a single space
// E: 'Hello World' => 'World Hello'
// P: first to return the string in reverse we need to use the split,reverse,join to reverse the string
// next we want to add an additional split,reverse,join with spaces to always keep separated with a single space


// my solution

function reverse(string){
    return string.split(' ').reverse().join(' ');
}

reverse = s => s.split(' ').reverse().join(' ')
