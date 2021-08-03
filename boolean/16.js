/*Given a positive integer, verify the following proposition: 
"The integer is a two-digit even number". */

function isEven(number1) {
    if (number1 % 2 == 0) {
        return "The integer is a two digit even number";
    } else {
        return "The integer is not a two digit even number";
    }
}

var number1 = 24;
var result = isEven(number1);
console.log(result)