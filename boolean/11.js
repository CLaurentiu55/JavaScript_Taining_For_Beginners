/* Given two integers A and B, verify the following proposition: 
"The numbers A and B have equal parity". */

function oddNumber(number1) {
    if(number1 % 2 == 0) {
        return "number1 is even";
    } else {
        return "number1 is not even";
    }
}

var number1 = 26;
var result = oddNumber(number1);
console.log(result)

function oddNumberTwo(number2) {
    if(number2 % 2 == 0) {
        return "number2 is even";
    } else {
        return "number2 is not even";
    }
}

var number2 = 40;
var result = oddNumberTwo(number2);
console.log(result)