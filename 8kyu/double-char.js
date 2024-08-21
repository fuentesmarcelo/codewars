// PREP
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    // Your code here
}
// hint: can be solved using arrow with split, map, join or solved regular with for loop

// P: the parameter is a string
// R: I want to return a str in which each character is repeated once (case-sensitive)
// E: "String" -> "SSttrriinngg"
// P: 



// solutions

const doubleChar = (str) => str.split("").map(c => c + c).join("");

function doubleChar(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};