/* Given three integers A, B, C, verify the following proposition: 
"Each of the numbers A, B, C is positive". */

function oddNumber(number1, number2, number3) {
    if(number1 >= 0 && number2 >= 0 && number3 >= 0) {
        return "each of the numbers are positive";
    } else {
        return "each of the numbers are not positive";
    }
}

var number1 = 26;
var number2 = 57;
var number3 = 1;
var result = oddNumber(number1, number2, number3);
console.log(result)