function bmiCalculator(kg, m){
  var bmi = Math.round(kg/(m*m));
  return bmi;
}

console.log( bmiCalculator(65, 1.8));