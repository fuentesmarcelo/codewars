// PREP 2024-07-03
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// P: the parameter is bool
// R: return a yes or a no for false


// my solutions
const boolToWord = bool => bool === true ? 'Yes' : 'No';

function boolToWord( bool ){
    if (bool) {
    return 'Yes';
    } else {
    return 'No';
    }
  }