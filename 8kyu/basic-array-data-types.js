// PREP July 1st, 2024
//I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

// P: parameters are given in individual problems
// R: return length of arr, return the first element of arr, return the last element of arr, push el to arr, pop an element from arr



// my solutions
function getLength(arr){
    //return length of arr
    return arr.length
  }
function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=arr.push(1);
  //push el to arr
  
  return arr
}
function popElement(arr){
    //pop an element from arr
    let la = arr.pop()
    return arr
  }