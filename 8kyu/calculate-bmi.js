// PREP
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
// code here
}

// P: we are given a parameter of weight/height
// R: return the underweight, normal, overweight, obese determined by a person's bmi
// E: if 23 should return 'Normal'
// P: first we need to declare the variable of bmi
// next make an if statement 


// my solution

function bmi(weight, height) {
    const bmi = weight / (height * height); // Calculate BMI
  
    if (bmi > 30) {
      return 'Obese';
    } else if (bmi > 25) {
      return 'Overweight';
    } else if (bmi > 18.5) {
      return 'Normal';
    } else {
      return 'Underweight';
    }
}