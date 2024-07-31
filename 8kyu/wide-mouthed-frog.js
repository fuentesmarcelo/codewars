// PREP 2024-07-30
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.


// P: animal
// R: return function with lower case and letting us know if the mouth is small or wide


// my solutions
function mouthSize(animal){
    animal = animal.toLowerCase();
    if(animal === 'alligator'){
        return 'small';
    }else{
        return 'wide';
    }
}

function mouthSize(animal){
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
}
