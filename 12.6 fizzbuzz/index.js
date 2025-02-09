var output = [];
let i = 0;
function fizzbuzz(){
    i++
    if (i % 3 === 0 && i % 5 === 0) {
        output.push("fizzbuzz");
    } else {
        if (i % 3 === 0) {
            output.push("fizz");
        } else {
           if (i % 5 === 0) {
               output.push("buzz");
           } else {
              output.push(i); 
           } 
        }
    }
    console.log(output);
}
fizzbuzz(); 