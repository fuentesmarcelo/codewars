// PREP

// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

function add(a, b){
	// code here
}

// P: the parameter is (a, b) where one is a number, the other is a string. 
// R: return true if they are the same character (== not ===) and false if they are not
// E: ('1', 1), true), (120, '021'), false)
// P: solve in a regular function and arrow function
// make an if statement comparing a and b with a return boolean of true and false


// my solution

function add(a, b){
    let num = Number(a);
    let str = String(b)
    if(num == str === 0){
        return 'true'
    }else{
        return 'false'
    }
}

const add = (a, b) => a == b || b ==a ? 'true' : 'false';


// right solution

function add(a, b){
	return a == b 
}