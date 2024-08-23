// PREP
// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  
}


// P: the parameter is sperm which will be XY for male or XX for female
// R: we want to return a message depending on if it is a male or female
// E: returing XX the message would be "Congratulations! You're going to have a daughter."
// P: I think we can use a regular function
// we should be able to use === with XX or XY


// my solution

const chromosomeCheck = sperm => sperm == daughter ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  let sperm = XX || XY

  if(sperm === XX){
    return "Congratulations! You're going to have a daughter."; 
  }else{
    return "Congratulations! You're going to have a son.";
  }
}

// right solutions

function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}

function chromosomeCheck(sperm) {
    if(sperm == "XY")
    {
      return "Congratulations! You're going to have a son.";
    }
    
    return "Congratulations! You're going to have a daughter.";
    }