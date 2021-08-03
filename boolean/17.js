/*Given a positive integer, verify the following proposition: 
"The integer is a three-digit odd number". */

function threeDigitOdd(number) {
    if (number % 2 == 1) {
        return "The integer is a three digit odd number";
    } else {
        return "The integer is not a three digit odd number";
    }
}

var number = 475;
var result = threeDigitOdd(number);
console.log(result)