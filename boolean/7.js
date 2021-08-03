/* Given three integers A, B, C, verify the following proposition: 
"The number B is between A and C". */

function verifyingNumber(number1, number2, number3) {
    if(number1 == number2 && number2 == number3) {
        return "number2 is between number1 and number3";
    } else {
        return "number 2 is not between number1 and number3";
    }
}

var number1 = 5;
var number2 = 5;
var number3 = 5;
var result = verifyingNumber(number1, number2, number3);
console.log(result)