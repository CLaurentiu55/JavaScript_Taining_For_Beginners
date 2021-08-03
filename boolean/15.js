/* Given three integers A, B, C, verify the following proposition: 
"Exactly two of the numbers A, B, C are positive". */

function oddNumber(number1, number2, number3) {
    if(number1 >= 0 && number2 >= 0 && number3 <= 0) {
        return "exactly two of the numbers are positive";
    } else {
        return "every number is not positive";
    }
}

var number1 = 73;
var number2 = 48;
var number3 = -35;
var result = oddNumber(number1, number2, number3);
console.log(result)