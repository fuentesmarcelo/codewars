// PREP 2024-07-24
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!


// P: words
// R: return an arr of words that are smashed together with a space

function smash (words) {
    return ""
}


// my solutions
function smash (words) {
    return words.join(' ');
};

const smash = words => words.join(' ');