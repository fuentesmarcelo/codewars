// PREP
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
  //Code goes here!
}


// P: the parameter is a word
// R: we are trying to return the middle character or the word, if word length is odd return the middle character, but if positive return the 2 middle characters
// E: "test" => "es" or "bat" => "a"
// P: probably use an if statement with .length

const getMiddle = s => s.length % 2 === 0 ? s.slice(s.length / 2 - 1, s.length / 2 + 1) : s[Math.floor(s.length / 2)]
