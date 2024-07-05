// PREP 2024-07-04
// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// P: base, factor
// R: return true if it is a factor or false if it is not


// my solutions
function checkForFactor(base, factor){
    if(base % factor !== 0){
        return false;
    }else{
        return true;
    }
}

function checkForFactor(base, factor){
    return base % factor === 0;
}