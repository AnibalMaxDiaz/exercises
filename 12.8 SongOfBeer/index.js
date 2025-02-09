var firstNumberOfBottles = 99;
var secondNumberOfBottles = firstNumberOfBottles - 1;
function song(){
  while (secondNumberOfBottles > 0) {
    console.log(firstNumberOfBottles + " bottles of beer on the wall, " + firstNumberOfBottles + " bottles of beer. Take one down, pass it arround " + secondNumberOfBottles + " bottles of beer on the wall.");
    firstNumberOfBottles--;
    secondNumberOfBottles--;
  }
  console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it arround, no more bottles of beer on the wall.");
  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}song();