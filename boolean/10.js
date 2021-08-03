/* Given two integers A and B, verify the following proposition: 
"Exactly one of the numbers A and B is odd". */

function oddNumber(number1) {
    if(number1 % 2 == 1) {
        return "number1 is odd";
    } else {
        return "number1 is not odd";
    }
}

var number1 = 53;
var result = oddNumber(number1);
console.log(result)

function oddNumber(number2) {
    if(number2 % 2 == 1) {
        return "number2 is odd";
    } else {
        return "number2 is not odd";
    }
}

var number2 = 38;
var result = oddNumber(number2);
console.log(result)