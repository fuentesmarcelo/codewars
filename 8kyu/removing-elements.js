// PREP 2024-07-17
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    //your code here
}

// P: arr
// R: return an array with every second element removed



// my solutions

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
}
  
const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);